import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavigationBar from "@/components/navigation-bar";
import CartSidebar from "@/components/custom/cartSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Store",
  description: "By Ryan Andrew",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <CartSidebar />
        {children}
        <div className="h-40 flex justify-center items-center">FOOTER</div>
      </body>
    </html>
  );
}
