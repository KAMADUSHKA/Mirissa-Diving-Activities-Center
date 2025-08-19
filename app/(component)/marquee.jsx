'use client'
import React from 'react'

export default function Marquee() {
  return (
 <div className="marquee">
      <p>🐢 Mirissa Turtle Snorkeling • 🐋 Whale Watching 6:00 AM • 🌅 Sunset Cruise • 🍽 Free Breakfast</p>
      <style jsx>{`
        .marquee {
          overflow: hidden;
          white-space: nowrap;
        }
        .marquee p {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
