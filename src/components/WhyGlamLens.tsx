import React from 'react'

interface FeatureProps {
  icon: string
  title: string
  description: string
}

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col gap-3.5">
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-xl flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-inter text-base font-bold text-dark-text mb-1">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
)

export const WhyGlamLens: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: '👁️',
      title: 'Virtual Try-On',
      description: 'See exactly how items look on you before purchasing — no guesswork.',
    },
    {
      icon: '⚡',
      title: 'Quick & Easy',
      description: 'Browse, select, and try on any item in seconds with one tap.',
    },
    {
      icon: '💯',
      title: 'Accurate Fit',
      description: 'AI-powered size recommendations tailored to your measurements.',
    },
    {
      icon: '🔒',
      title: 'Safe & Secure',
      description: 'Your privacy is our priority — your data stays yours, always.',
    },
  ]

  return (
    <div className="bg-gray-50 border-b border-border-light">
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[180px] text-black/[0.03] leading-none pointer-events-none select-none hidden lg:block">
          ✦
        </div>

        <div className="relative z-10 max-w-2xl mb-10">
          <h2 className="font-inter text-3xl md:text-2xl font-black text-dark-text mb-3">Why GlamLens?</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Experience the future of online shopping with our cutting-edge virtual try-on technology.
          </p>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 md:gap-6">
          {features.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} />
          ))}
        </div>
      </section>
    </div>
  )
}
