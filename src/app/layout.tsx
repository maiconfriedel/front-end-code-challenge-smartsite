import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gotham = localFont({
  src: [
    {
      path: "./fonts/gotham-black.woff2",
      weight: "900",
      style: "black",
    },
    {
      path: "./fonts/gotham-bold.woff2",
      weight: "400",
      style: "bold",
    },
    {
      path: "./fonts/gotham-book.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/gotham-light.woff2",
      weight: "300",
      style: "light",
    },
  ],
});

export const metadata: Metadata = {
  title: "Code Challenge Smartsite",
  description: "Frontend for the Code Challenge Smartsite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gotham.className}>{children}</body>
    </html>
  );
}
