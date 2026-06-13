import React from 'react'

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
]

const FOOTER_LINKS = {
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Shop: ['New Arrivals', 'Top Deals', 'Categories', 'Brands'],
  Support: ['Help Center', 'Track Order', 'Returns', 'Contact Us'],
}

export const Footer: React.FC = () => (
  <>
    {/* ── CTA Band ── */}
    <div className="bg-purple-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-12 text-center">
        <div className="mb-5">
          <img src="/logo-full-brand.svg" alt="GlamLens" className="h-10 w-auto" />
        </div>
        <h2 className="font-inter text-3xl md:text-2xl font-black text-white mb-3">Ready to Try It On?</h2>
        <p className="text-sm text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
          Download the GlamLens app and experience AI-powered virtual fashion try-on for free.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-purple-dark rounded-full font-bold text-sm hover:bg-gray-100 transition-all duration-200">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.29.07 2.21.74 2.95.77 1.13-.22 2.21-.91 3.41-.83 1.44.14 2.52.72 3.24 1.88-2.96 1.82-2.53 5.85.34 7.04-.44 1.22-.96 2.4-1.94 3.02zM12.03 7.25c-.17-2.65 1.98-4.83 4.55-5 .32 2.95-2.68 5.1-4.55 5z" />
            </svg>
            App Store
          </button>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all duration-200">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="m3 20.5v-17c0-.83 1-.83 1.5-.28l15 8.5c.5.28.5 1 0 1.28l-15 8.5c-.5.28-1.5.27-1.5-.5z" />
            </svg>
            Google Play
          </button>
        </div>
      </div>
    </div>

    {/* ── Footer links ── */}
    <footer className="bg-white border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-8">
        <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-8 mb-10">
          {/* Brand column */}
          <div>
            <img src="/logo-full-brand.svg" alt="GlamLens" className="h-7 w-auto mb-4" />
            <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">
              AI-powered virtual try-on for fashion and beauty lovers everywhere.
            </p>
            <div className="flex gap-2.5 mt-5">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-purple-main hover:text-purple-main transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-inter text-sm font-bold text-dark-text mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-500 hover:text-purple-main transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-light pt-6 flex items-center justify-between md:flex-col md:gap-3 md:text-center">
          <p className="text-xs text-gray-400">© 2025 GlamLens. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-400 hover:text-purple-main transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
)
