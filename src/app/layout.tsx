import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "TravelMoods",
  description: "Discover amazing travel destinations based on how you feel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
