import React from 'react'

interface ProductCardProps {
  image: string
  name: string
  price: number
  badge?: string
  badgeColor?: 'popular' | 'off' | 'new'
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, badge, badgeColor = 'popular' }) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
    <div className="relative aspect-square bg-gray-100 overflow-hidden">
      {badge && (
        <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold text-white badge badge-${badgeColor}`}>
          {badge}
        </span>
      )}
      <img src={image} alt={name} className="w-full h-full object-cover hover:scale-104 transition-transform duration-300" />
    </div>
    <div className="p-3">
      <h3 className="text-sm font-semibold text-dark-text mb-1">{name}</h3>
      <p className="font-inter text-base font-black text-gray-800">
        <span className="text-sm">₦</span> {price.toLocaleString()}
      </p>
    </div>
  </div>
)

export const ProductsGrid: React.FC = () => {
  const topDeals = [
    { image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999, badge: 'Popular', badgeColor: 'popular' as const },
    { image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
    { image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
    { image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
  ]

  const newPicks = [
    { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999, badge: 'Popular', badgeColor: 'popular' as const },
    { image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
    { image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999, badge: '25% OFF', badgeColor: 'off' as const },
    { image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
    { image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
    { image: 'https://images.unsplash.com/photo-1559333086-b0a56225a93c?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
    { image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
    { image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop&q=80', name: 'Some Luxury Bag', price: 199999 },
  ]

  return (
    <>
      {/* Top Deals */}
      <section className="py-12 md:py-7 px-10 md:px-4 bg-gray-50 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-inter text-2xl font-black text-dark-text">Top Deals</h2>
          <button className="px-4 py-1.5 border border-gray-300 rounded-md text-xs font-semibold text-gray-600 hover:border-purple-main hover:text-purple-main transition-colors">
            View All
          </button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
          {topDeals.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </section>

      {/* New Picks */}
      <section className="py-12 md:py-7 px-10 md:px-4 bg-white max-w-6xl mx-auto">
        <h2 className="font-inter text-2xl font-black text-dark-text text-center mb-8">New Picks You'll Love</h2>
        <div className="grid grid-cols-4 md:grid-cols-2 gap-4 mb-8">
          {newPicks.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-1.5 px-7 py-3 border-2 border-gray-300 rounded-full bg-white text-sm font-bold text-gray-600 hover:border-purple-main hover:text-purple-main transition-all">
            View More
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}
