import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/Context/AuthContext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <Toaster position="top right" richColors/>
          {children}</AuthContext>
      </body>
    </html>
  );
}
