import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { WishlistProvider } from "@/components/wishlist/WishlistProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

const title = "Ele's Hub | Fashion for All";
const description = "Ele's Hub is Lagos' go-to spot for deadstock sneakers, slides and streetwear — New Balance, Nike SB, Moncler and more, curated for everyone.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Ele's Hub"
  },
  description,
  metadataBase: new URL("https://elefashionhub.com"),
  openGraph: {
    title,
    description,
    siteName: "Ele's Hub",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
