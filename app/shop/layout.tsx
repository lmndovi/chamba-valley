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
        <div>
          <div className="flex md:flex-row justify-between p-5  items-center">
            <div className="absolute top-6 left-0">
              <Logo />
            </div>
            <div className="md:absolute top-3 right-4">
              <Navbar />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
