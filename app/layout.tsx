import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Smart Client Portal",
  description: "TODO:: Here will be description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="min-h-screen bg-gray-50">
          <header className="p-4 bg-white border-b">
            <div className="max-w-5xl mx-auto">
              <h1 className="font-bold">Smart Portal</h1>
            </div>
          </header>
          <main className="max-w-5xl mx-auto p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
