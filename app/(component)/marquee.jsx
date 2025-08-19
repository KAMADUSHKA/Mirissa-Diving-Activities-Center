'use client'
import React from 'react'

export default function Marquee() {
  return (
 <div className="marquee">
      <p>🐢  Join us at Mirissa Diving Activities Center for unforgettable Snorkeling, Whale Watching and Scuba Diving  –  Adventure Awaits!  🐋</p>
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
