import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "./mongodb";
import User from "@/models/User";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          if (!email || !password) {
            return null;
          }
          await connectDB();
          const user = await User.findOne({ email });
          if (!user || password !== user.password) {
            return null;
          }
          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
      secret: process.env.NEXTAUTH_SECRET,
      callbacks: {
        jwt: async ({ token, user }) => {
          if (user) {
            token.accessToken = user.token;
            token.id = user.id;
          }
          return token;
        },
        session: async ({ session, token }) => {
          session.accessToken = token.accessToken;
          session.user.id = token.id;
          return session;
        },
      },
      session: {
        strategy: "jwt",
      },
      pages: {
        signIn: "/auth/login",
      },
    }),
  ],
};
