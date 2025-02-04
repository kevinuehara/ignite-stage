import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const fontFamily = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Stage",
  description: "Platform for events and speakers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontFamily.className} antialiased`}>{children}</body>
    </html>
  );
}
