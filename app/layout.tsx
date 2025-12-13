import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

/*export const metadata: Metadata = {
  title: "Drohna Disci | Luxury Fashion Brand",
  description:
    " A luxury South Sudanese fashion brand by designer Mathiang.",
  generator: "Mathiang Mathiang",
  icons: {
    icon: [
     /* {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.png",
        type: "image/svg+xml",
      },*/
    ],
    apple: "/apple-icon.png",
  },
}*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LoadingScreen />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
