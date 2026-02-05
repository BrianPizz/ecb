import type { Metadata } from "next";
import { Open_Sans, Playwrite_ID } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playwriteIndia = Playwrite_ID({
  variable: "--font-playwrite-india",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Educational Consulting",
  description: "Professional educational consulting services to help you achieve your academic and career goals through personalized guidance and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playwriteIndia.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
