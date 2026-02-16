import type { Metadata, Viewport } from "next"; // Tambahkan Viewport di sini
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Valentine Day for A",
  description: "A special Valentine's gift for A ❤️",
};

// PERBAIKAN: Viewport dipisah dan menggunakan camelCase
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false, // Opsi tambahan: mencegah user melakukan zoom cubit
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <MusicPlayer />
        {children}
      </body>
    </html>
  );
}
