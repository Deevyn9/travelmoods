import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelMoods",
  description: "Where do you wanna go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
