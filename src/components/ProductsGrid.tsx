import React from 'react'

interface ProductCardProps {
  image: string
  name: string
  price: number
  badge?: string
  badgeColor?: 'popular' | 'off' | 'new'
}

const badgeClasses: Record<string, string> = {
  popular: 'bg-green-500',
  off: 'bg-purple-main',
  new: 'bg-accent-orange',
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, badge, badgeColor = 'popular' }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
    <div className="relative aspect-square bg-gray-100 overflow-hidden">
      {badge && (
        <span className={`absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded-full text-xs font-bold text-white ${badgeClasses[badgeColor] ?? 'bg-green-500'}`}>
          {badge}
        </span>
      )}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-3.5">
      <h3 className="text-sm font-semibold text-dark-text mb-1.5 truncate">{name}</h3>
      <p className="font-inter text-base font-black text-dark-text">
        <span className="text-sm font-bold">₦</span>{price.toLocaleString()}
      </p>
    </div>
  </div>
)

export const ProductsGrid: React.FC = () => {
  const topDeals = [
    { image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop&q=80', name: 'Luxury Lip Collection', price: 19999, badge: 'Popular', badgeColor: 'popular' as const },
    { image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format&fit=crop&q=80', name: 'Premium Sneakers', price: 89999 },
    { image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80', name: 'Modern Sofa Set', price: 499999 },
    { image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&auto=format&fit=crop&q=80', name: 'Designer Handbag', price: 149999 },
  ]

  const newPicks = [
    { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80', name: 'Running Shoes Pro', price: 64999, badge: 'New', badgeColor: 'new' as const },
    { image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&auto=format&fit=crop&q=80', name: 'Classic Wig Set', price: 34999 },
    { image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80', name: 'Elegant Dress', price: 28999, badge: '25% OFF', badgeColor: 'off' as const },
    { image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&auto=format&fit=crop&q=80', name: 'Sunglasses Collection', price: 12999 },
    { image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=400&auto=format&fit=crop&q=80', name: 'Casual Tee Bundle', price: 9999 },
    { image: 'https://images.unsplash.com/photo-1559333086-b0a56225a93c?w=400&auto=format&fit=crop&q=80', name: 'Formal Blazer', price: 59999 },
    { image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop&q=80', name: 'Dance Skirt', price: 19999 },
    { image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop&q=80', name: 'Sport Joggers', price: 24999 },
  ]

  return (
    <>
      {/* ── Top Deals ── */}
      <div className="bg-gray-50 border-b border-border-light">
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-inter text-2xl font-black text-dark-text">Top Deals</h2>
            <button className="px-4 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-500 hover:border-purple-main hover:text-purple-main transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
            {topDeals.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </section>
      </div>

      {/* ── New Picks ── */}
      <div className="bg-white border-b border-border-light">
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-inter text-2xl font-black text-dark-text">New Picks You&apos;ll Love</h2>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 mb-8">
            {newPicks.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:border-purple-main hover:text-purple-main transition-all duration-200">
              View More
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
