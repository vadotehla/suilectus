import type { Metadata } from "next";

import { Economica } from "next/font/google";

import "@/app/globals.css";

export const metadata: Metadata = {
  creator: "Ðêr Ðäþ ê äles vāðe Ámïkes",
  description: "À VadoTehlan, ðas site sózial téłé-gūt.",
  openGraph: {
    type: "website",
    title: "SUILECTUS",
    siteName: "SUILECTUS",
    description: "À VadoTehlan, ðas site sózial téłé-gūt.",
    emails: ["i@u1t.dev", "m@u1t.dev"],
    url: "https://u1t.dev/",
  },
  title: "SUILECTUS",
};

const economica = Economica({ weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={economica.className}>
      <body>{children}</body>
    </html>
  );
}
