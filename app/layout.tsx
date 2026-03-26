import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech",
});

export const metadata: Metadata = {
  title: "ASTRANEX'26 | Every Skill Has a Stage",
  description: "Official association of Dept. of CSE, IT, Cyber Security & AI&DS — SRG Engineering College, Namakkal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${shareTechMono.variable}`}>
        {children}
      </body>
    </html>
  );
}