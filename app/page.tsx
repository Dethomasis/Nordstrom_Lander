"use client"

import { Check, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function DoorDashPage() {
  const [showStep2, setShowStep2] = useState(false)

  if (showStep2) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-5">
        {/* Step 2 - Before You Go */}
        <div className="w-full max-w-sm bg-[#F9F6F1] rounded-lg p-6 border border-gray-200">
          <p className="text-black text-xs font-bold tracking-wide mb-3 text-center">BEFORE YOU GO</p>
          <h3 className="text-gray-900 text-xl font-bold text-center mb-3">
            Select <span className="text-black underline">18+</span> when you sign up
          </h3>
          <p className="text-gray-500 text-sm font-bold text-center mb-5">
            Then start your first offer to unlock the Nordstrom credit and all other exclusive offers.
          </p>
          <a
            href="https://trksy.org/aff_c?offer_id=1146&aff_id=165496"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black hover:bg-gray-800 text-white py-4 px-5 flex items-center justify-center gap-2 transition-colors font-bold text-sm rounded-lg text-center whitespace-nowrap"
          >
            Got it <ArrowRight className="w-4 h-4 flex-shrink-0" /> Start Earning
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-5">
      {/* Nordstrom Logo Card */}
      <div className="w-56 h-20 bg-white rounded-xl flex items-center justify-center mb-4 p-3">
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nordstrom-logo-1-DzrHqs3iCvtFeUwmMr3KobkEp99FW4.jpg" alt="Nordstrom" width={200} height={50} className="object-contain" />
      </div>

      {/* Heading */}
      <h1 className="text-gray-900 text-base text-center mb-5 leading-tight font-bold">
        Complete the Steps below to Claim your
        <br />
        <span className="text-black">$500</span> Nordstrom Credit
      </h1>

      {/* Quick Start Guide Card */}
      <div className="w-full max-w-sm bg-[#F9F6F1] rounded-lg p-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-gray-900 text-sm font-bold">Quick Start Guide</h2>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        <div className="space-y-2.5">
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-900 text-sm font-bold">Complete 2-3 required deals</p>
              <p className="text-black text-sm font-semibold">Earn up to $500</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-900 text-sm font-bold">Provide a valid email address</p>
              <p className="text-black text-sm font-semibold">For instant notification</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-900 text-sm font-bold">Ensure you are 18 years or older</p>
              <p className="text-black text-sm font-semibold">Required</p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Questions Card */}
      <div className="w-full max-w-sm bg-[#F9F6F1] rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-gray-900 text-sm font-bold">Common Questions</h2>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>

        <div className="space-y-2.5">
          <div>
            <p className="text-black text-sm font-bold">How long do the deals take?</p>
            <p className="text-gray-500 text-sm font-bold">Quick 10-20 minute completion time per deal</p>
          </div>

          <div>
            <p className="text-black text-sm font-bold">What are deals?</p>
            <p className="text-gray-500 text-sm font-bold">Simple tasks like app downloads, surveys, or trial</p>
          </div>
        </div>
      </div>

      {/* Start Now Button */}
      <button
        onClick={() => setShowStep2(true)}
        className="w-full max-w-sm bg-black hover:bg-gray-800 text-white py-3.5 px-5 flex items-center justify-center gap-2 transition-colors font-bold text-sm rounded-lg"
      >
        Start Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}
