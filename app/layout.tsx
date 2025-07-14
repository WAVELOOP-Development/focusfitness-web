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
  title: {
    template: 'Focus Fitness',
    default: 'Focus Fitness - Your Ultimate Destination for Achieving Fitness Excellence',
  },
  description: "Sri Lanka's Smartest Fitness App – Personalized Plans, AI Coaching, and Powerful Gym Management Tools.",
  keywords: ['Focus Fitness', 'Health', 'Wellness', 'Fitness', 'Personal Training', 'Nutrition'],
  creator: 'Team Waveloop',
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icon-192.png',
  },
  openGraph: {
    title: 'Focus Fitness',
    description: "Sri Lanka's Smartest Fitness App – Personalized Plans, AI Coaching, and Powerful Gym Management Tools.",
    url: 'https://focusfitness.waveloop.dev',
    siteName: 'Focus Fitness',
    images: [
      {
        url: 'https://focusfitness.waveloop.dev/logoE.jpg',
        width: 1200,
        height: 630,
        alt: 'Focus Fitness Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
    <head>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Focus Fitness",
              "url": "https://focusfitness.waveloop.dev",
              "logo": "https://focusfitness.waveloop.dev/logoE.jpg",
              "description": "Focus Fitness is Sri Lanka's Smartest Fitness App – Personalized Plans, AI Coaching, and Powerful Gym Management Tools."
            })
          }}
        />
      </head>
      {" "}
      {/* Apply font variables to html */}
      <body>{children}</body>
    </html>
  )
}
