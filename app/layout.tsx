import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravella | Health, Wealth, and Community",
  description:
    "Ravella Ultra Solution Limited - We promote wellness and build sustainable income with multiple earning opportunities. Live healthy. Earn massively. Share effortlessly. Grow globally.",
  keywords:
    "Ravella, wellness, health products, MLM, network marketing, earning opportunities, natural products",
  authors: [{ name: "Ravella" }],
  openGraph: {
    title: "Ravella | Health, Wealth, and Community",
    description:
      "We promote wellness, and build sustainable income with multiple earning opportunities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ravella",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Zalando+Sans+SemiExpanded:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
