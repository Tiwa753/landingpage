import React, { useState } from 'react'

const NAV_ITEMS = ['Makeup & Beauty', 'Wigs & Hair', "Women's Clothing", "Men's Fashion", 'Accessories']

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* ── Top bar ── */}
      <div className="border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Desktop */}
            <img src="/logo-full-brand.svg" alt="GlamLens" className="h-8 w-auto hidden sm:block" />
            {/* Mobile */}
            <img src="/logo-icon.svg" alt="GlamLens" className="h-8 w-8 sm:hidden" />
          </div>

          {/* Search bar — desktop only */}
          <div className="hidden md:flex flex-1 max-w-md items-center gap-2 bg-gray-100 border border-gray-300 rounded-full px-4 py-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <circle cx="11" cy="11" r="7" stroke="#6b7280" strokeWidth="1.8" />
              <path d="M16.5 16.5L21 21" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search products, brands, categories…"
              className="bg-transparent outline-none flex-1 text-sm text-dark-text placeholder-gray-400 font-inter"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Auth buttons — desktop */}
            <button className="hidden md:inline-flex px-5 py-2 border-2 border-purple-main rounded-full text-purple-main font-semibold text-sm hover:bg-purple-main hover:text-white transition-all duration-200">
              Sign Up
            </button>
            <button className="hidden md:inline-flex px-5 py-2 bg-purple-dark rounded-full text-white font-semibold text-sm hover:bg-purple-main transition-all duration-200">
              Log In
            </button>

            {/* Cart — always visible */}
            <button className="flex items-center gap-1.5 text-dark-text hover:text-purple-main transition-colors" aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L5.27 15.27C4.74 15.9 5.19 16.87 6 16.87H17M17 19.5C17 20.33 16.33 21 15.5 21C14.67 21 14 20.33 14 19.5C14 18.67 14.67 18 15.5 18C16.33 18 17 18.67 17 19.5ZM9 19.5C9 20.33 8.33 21 7.5 21C6.67 21 6 20.33 6 19.5C6 18.67 6.67 18 7.5 18C8.33 18 9 18.67 9 19.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-semibold hidden sm:inline">Cart (0)</span>
            </button>

            {/* Mobile search icon */}
            <button className="md:hidden p-1.5 text-dark-text hover:text-purple-main transition-colors" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {/* Hamburger — mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-1.5 flex flex-col justify-center gap-1.5 text-dark-text"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`block h-0.5 w-5 bg-current transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop sub-nav ── */}
      <div className="hidden md:block border-b border-border-light bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:pl-[187px] lg:pr-0 flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 px-4 py-3 font-inter font-semibold text-sm text-dark-text cursor-pointer hover:text-purple-main transition-colors whitespace-nowrap"
            >
              {item}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white border-b border-border-light">
          {NAV_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between px-6 py-4 font-inter font-semibold text-sm text-dark-text border-b border-gray-100 cursor-pointer hover:text-purple-main hover:bg-gray-50 transition-colors"
            >
              {item}
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          ))}
          <div className="flex gap-3 px-6 py-4">
            <button className="flex-1 py-2.5 border-2 border-purple-main rounded-full text-purple-main font-semibold text-sm hover:bg-purple-main hover:text-white transition-all duration-200">
              Sign Up
            </button>
            <button className="flex-1 py-2.5 bg-purple-dark rounded-full text-white font-semibold text-sm hover:bg-purple-main transition-all duration-200">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
