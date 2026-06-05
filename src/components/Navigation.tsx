import React, { useState } from 'react'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* Top Navigation */}
      <div className="sticky top-0 z-100 bg-white border-b border-border-light">
        <nav className="flex items-center justify-between px-10 md:px-4 h-12 max-w-6xl mx-auto w-full">
          {/* Logo Desktop */}
          <div className="hidden md:block">
            <img src="./logo-full.svg" alt="GlamLens" className="h-8 w-auto" />
          </div>

          {/* Logo Mobile */}
          <div className="md:hidden">
            <img src="./logo-icon.svg" alt="GlamLens" className="h-8 w-8" />
          </div>

          {/* Search Bar Desktop */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 border border-black rounded-full px-4 py-2 flex-1 max-w-sm mx-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#1a1a1a" strokeWidth="1.5" />
              <path d="M16.5 16.5L21 21" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search Products, Brands, and Categories"
              className="bg-transparent outline-none flex-1 text-sm font-inter"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-1.5">
            <button className="hidden md:block px-5 py-2 border-2 border-purple-main rounded-full text-purple-dark font-bold text-sm hover:bg-purple-main hover:text-white transition-all">
              Sign Up
            </button>
            <button className="hidden md:block px-5 py-2 bg-purple-dark rounded-full text-white font-bold text-sm hover:bg-purple-main transition-all">
              Log In
            </button>
            <div className="flex items-center gap-1 text-dark-text font-bold cursor-pointer md:flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L5.27 15.27C4.74 15.9 5.19 16.87 6 16.87H17M17 19.5C17 20.33 16.33 21 15.5 21C14.67 21 14 20.33 14 19.5C14 18.67 14.67 18 15.5 18C16.33 18 17 18.67 17 19.5ZM9 19.5C9 20.33 8.33 21 7.5 21C6.67 21 6 20.33 6 19.5C6 18.67 6.67 18 7.5 18C8.33 18 9 18.67 9 19.5Z"
                  stroke="#1a1a1a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden md:inline text-xs">Cart (0)</span>
            </div>
            {/* Mobile Search Icon */}
            <button className="md:hidden p-2" aria-label="Search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#1E1E1E" strokeWidth="1.8" />
                <path d="M16.5 16.5L21 21" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-1 flex flex-col gap-1"
              aria-label="Open menu"
            >
              <span className={`block h-0.5 w-6 bg-dark-text transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-dark-text transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-dark-text transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-white border-b border-border-light overflow-hidden">
          {['Makeup & Beauty', 'Wigs & Hair', "Women's Clothing", "Men's Fashion", 'Accessories'].map((item) => (
            <div key={item} className="flex items-center justify-between px-5 py-3.5 font-inter font-semibold text-dark-text border-b border-gray-100 cursor-pointer hover:text-purple-main">
              {item}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          ))}
          <div className="flex gap-2.5 p-3 px-5">
            <button className="flex-1 px-5 py-2 border-2 border-purple-main rounded-full text-purple-dark font-bold text-sm hover:bg-purple-main hover:text-white transition-all">
              Sign Up
            </button>
            <button className="flex-1 px-5 py-2 bg-purple-dark rounded-full text-white font-bold text-sm hover:bg-purple-main transition-all">
              Log In
            </button>
          </div>
        </div>
      )}

      {/* Desktop Subnav */}
      <nav className="hidden md:flex items-center justify-center gap-0 bg-white border-b border-border-light">
        {['Makeup & Beauty', 'Wigs & Hair', "Women's Clothing", "Men's Fashion", 'Accessories'].map((item) => (
          <div key={item} className="flex items-center gap-1 px-5 py-3 font-inter font-semibold text-dark-text cursor-pointer hover:text-purple-main transition-colors">
            {item}
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        ))}
      </nav>
    </>
  )
}
