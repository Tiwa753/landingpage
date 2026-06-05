import React from 'react'

export const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-purple-dark rounded-full flex items-center justify-center text-white font-bold">
      G
    </div>
    <span className="font-inter font-black text-xl">GlamLens</span>
  </div>
)

export const LogoMobile: React.FC = () => (
  <div className="w-8 h-8 bg-purple-dark rounded-full flex items-center justify-center text-white font-bold">
    G
  </div>
)
