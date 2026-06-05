import React from 'react'

export const Hero: React.FC = () => (
  <section className="relative h-96 md:h-80 overflow-hidden bg-hero bg-cover bg-center">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55 z-10"></div>

    {/* Content */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-5">
      <h1 className="font-general-sans text-5xl md:text-4xl font-semibold text-white leading-tight max-w-2xl mb-4 drop-shadow-lg">
        See Your Style Before You Buy!
      </h1>
      <p className="font-inter text-xl md:text-base font-normal text-white max-w-2xl mb-8">
        Shopping for fashion just got easier. With GlamLens, you can try on wigs, makeup, clothing, and accessories virtually!
      </p>
      <button className="inline-flex items-center justify-center gap-2 w-96 md:w-80 h-14 bg-purple-main text-white rounded-full font-bold text-lg font-inter hover:bg-purple-dark transition-all transform hover:-translate-y-0.5">
        Try It Now
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </section>
)
