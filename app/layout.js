// layout.js
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import "./globals.css";



const inter = Inter ({ subsets: ['latin']})


export const metadata = {
 title: "Mirissa Diving Activities Center",
  description:
    "Discover unforgettable ocean adventures with Mirissa Diving Activities Center. Snorkeling, diving, fishing, dolphin & whale watching tours in Mirissa.",
  keywords:
    "Mirissa Diving Activities Center, Mirissa snorkeling, whale watching Mirissa, scuba diving Mirissa, night diving Mirissa, deep sea fishing Mirissa, turtle snorkeling, Sri Lanka snorkeling, deep sea tours, PADI Courses, Kayak Tours, Sunset Boat Tours",
  authors: [{ name: "Mirissa Diving Activities Center" }],
  robots: "index, follow",
  openGraph: {
    title: "Mirissa Diving Activities Center",
    description:
      "Join with Mirissa Diving Activities Center to unforgettable snorkeling, diving, fishing, dolphin & whale watching tours in Mirissa.",
    url: "https://www.mirissadivingactivities.com/",
    siteName: "Mirissa Diving Activities Center",
    images: [
      {
        url: "https://www.mirissadivingactivities.com/img/logo.png",
        width: 800,
        height: 600,
        alt: "Mirissa Diving Activities Center Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirissa Diving Activities Center",
    description:
      "Explore the ocean with Mirissa Diving Activities Center. Snorkeling, Diving, Whale & Dolphin Watching tours in Mirissa.",
    images: ["https://www.mirissadivingactivities.com/img/logo.png"],
    site: "@mirissadiving",
    creator: "@mirissadiving",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className={inter.className}>
      

        {children}
      </body>
    </html>
  );
}
