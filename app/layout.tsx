import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Lavanya Nallabelli | Full Stack Developer",
  description:
    "Portfolio of Lavanya Nallabelli, a Full Stack Developer specializing in React.js, Node.js, TypeScript, MongoDB, and PostgreSQL.",
  keywords: [
    "Lavanya Nallabelli",
    "Full Stack Developer",
    "React.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: "Lavanya Nallabelli" }],
  creator: "Lavanya Nallabelli",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lavanyanallabelli.com",
    title: "Lavanya Nallabelli | Full Stack Developer",
    description:
      "Portfolio of Lavanya Nallabelli, a Full Stack Developer specializing in React.js, Node.js, TypeScript, MongoDB, and PostgreSQL.",
    siteName: "Lavanya Nallabelli Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Lavanya Nallabelli Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavanya Nallabelli | Full Stack Developer",
    description:
      "Portfolio of Lavanya Nallabelli, a Full Stack Developer specializing in React.js, Node.js, TypeScript, MongoDB, and PostgreSQL.",
    creator: "@lavanyanallabelli",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'
