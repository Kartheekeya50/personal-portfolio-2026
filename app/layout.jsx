
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kartheek Narendrapurapu | Portfolio",
  description:
    "Explore Kartheek's portfolio featuring software development, data analytics, business projects and artificial intelligence.",
  keywords: [
    "Kartheek Narendrapurapu",
    "Data Science",
    "Artificial Intelligence",
    "Business Analytics",
    "Full Stack Development",
  ],
  authors: [{ name: "Kartheek Narendrapurapu" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
