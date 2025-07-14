import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google" // Import fonts
import "./globals.css"

// Configure Bebas Neue for headings
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400", // Bebas Neue is typically only 400 weight
  variable: "--font-heading", // Define CSS variable for Tailwind
})

// Configure Inter for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Specify desired weights
  variable: "--font-body", // Define CSS variable for Tailwind
})

export const metadata: Metadata = {
  title: "Focus Fitness",
  description: "Your ultimate destination for achieving fitness excellence.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      {" "}
      {/* Apply font variables to html */}
      <body>{children}</body>
    </html>
  )
}
