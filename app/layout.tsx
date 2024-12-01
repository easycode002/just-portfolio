import type { Metadata } from "next";
import "@/app/globals.css";
import "./globals.css";
import Navbar from "./components/organisms/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container px-4 mt-16">{children}</div>
      </body>
    </html>
  );
}
