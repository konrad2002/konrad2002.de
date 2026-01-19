import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "./footer/footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konrad Weiß - Software Developer",
  description: "Portfolio of Konrad Weiß (konrad2002) - CS Master student and software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
