import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ToggleNavigationMenu from "@/components/ToggleNavigationMenu";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breath Web",
  description: "Exercises to reduce anxiety and stay calm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="flex items-center justify-center overflow-hidden"
    >
      <body className={`${roboto.className} md:max-w-[1440px]`}>
        <div className="w-full">
          <ToggleNavigationMenu />
        </div>
        {children}
      </body>
    </html>
  );
}
