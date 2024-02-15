import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick and Morty Universe",
  description: "Discover the confounded Rick and Morty universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex">{children}</body>
    </html>
  );
}
