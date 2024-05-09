import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "global",
  description: "List of countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image src={"/logo.png"} alt="logo" width={48} height={48} />
              <h1 className="font-bold text-2xl">
                Lista de Países
              </h1>

            </section>
          </nav>
          {children}

        </main>
      </body>
    </html>
  );
}
