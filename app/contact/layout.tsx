import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div className="md:flex flex-row justify-between items-start">
          <div className="md:p-5">
            <Logo />
          </div>
          <div className="md:p-5 md:absolute md:-top-9 md:right-0">
            <Navbar />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
