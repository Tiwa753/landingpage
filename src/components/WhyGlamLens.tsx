import React from 'react'

interface FeatureProps {
  icon: string
  title: string
  description: string
}

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div>
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3.5 shadow-md text-lg">
      {icon}
    </div>
    <h3 className="font-inter text-sm font-black text-dark-text mb-1.5">{title}</h3>
    <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
  </div>
)

export const WhyGlamLens: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: '👁️',
      title: 'Virtual Try-On',
      description: 'See how items look on you before purchasing',
    },
    {
      icon: '⚡',
      title: 'Quick & Easy',
      description: 'Browse and try items in seconds',
    },
    {
      icon: '💯',
      title: 'Accurate Fit',
      description: 'AI-powered size recommendations',
    },
    {
      icon: '🔒',
      title: 'Safe & Secure',
      description: 'Your privacy is our priority',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-10 px-20 md:px-5 relative overflow-hidden">
      <div className="absolute right-20 top-1/2 -translate-y-1/2 text-9xl text-black/5 leading-none pointer-events-none md:hidden">
        ✦
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-inter text-3xl font-black text-dark-text mb-2">Why GlamLens?</h2>
        <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-10">
          Experience the future of online shopping with our cutting-edge virtual try-on technology.
        </p>

        <div className="grid grid-cols-4 md:grid-cols-1 gap-7">
          {features.map((feature, idx) => (
            <FeatureItem key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
