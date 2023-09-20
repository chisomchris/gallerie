import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/login",
  },
});

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico|register|auth/).*)"],
};
