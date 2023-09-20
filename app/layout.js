import { AuthProvider } from "./components/SessionProvider";
import "./globals.css";

export const metadata = {
  title: "Gallerie",
  description: "Image gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
