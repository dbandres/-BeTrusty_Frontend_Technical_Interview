import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../assets/logoBe.png";
import avatar from '../assets/Avatar.png'
import Image from "next/image";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="bg-[#000000] w-full h-[75px] right-0 tablet:pl-[115px] flex items-center justify-between tablet:pr-[25] phone:px-[25px]">
          <Image
            src={logo}
            height={35}
            width={120}
            alt="logo"
          />
          <Image
            src={avatar}
            height={45}
            width={45}
            alt="avatar"
          />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
