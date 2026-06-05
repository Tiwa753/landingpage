import React from 'react'

export const Hero: React.FC = () => (
  <section className="relative h-[480px] md:h-[420px] sm:h-[360px] overflow-hidden bg-hero bg-cover bg-center">
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />

    {/* Content */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-3xl mx-auto">
      <h1 className="font-general-sans text-5xl md:text-4xl sm:text-3xl font-semibold text-white leading-tight mb-4 drop-shadow-lg">
        See Your Style Before You Buy!
      </h1>
      <p className="font-inter text-lg md:text-base sm:text-sm font-normal text-white/90 max-w-xl mb-8 leading-relaxed">
        Shopping for fashion just got easier. With GlamLens, you can try on wigs, makeup, clothing, and accessories virtually!
      </p>
      <button className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-purple-main text-white rounded-full font-bold text-base font-inter hover:bg-purple-dark transition-all duration-200 shadow-lg hover:shadow-purple-main/30 hover:-translate-y-0.5">
        Try It Now
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  </section>
)
