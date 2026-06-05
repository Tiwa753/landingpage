import React from 'react'

interface CategoryProps {
  image: string
  label: string
}

const Category: React.FC<CategoryProps> = ({ image, label }) => (
  <div className="flex flex-col items-center gap-2.5 cursor-pointer group">
    <div className="w-24 h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 rounded-full border-2 border-gray-200 overflow-hidden flex items-center justify-center group-hover:border-purple-main group-hover:scale-105 transition-all duration-200 shadow-sm">
      <img src={image} alt={label} className="w-full h-full object-cover" />
    </div>
    <span className="text-xs font-semibold text-dark-text text-center leading-tight max-w-[80px]">{label}</span>
  </div>
)

export const Categories: React.FC = () => {
  const categories: CategoryProps[] = [
    {
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23DCC7E8" width="100" height="100"/><text x="50" y="55" font-size="11" text-anchor="middle" dominant-baseline="middle" fill="%23270A36" font-weight="bold">Wigs</text></svg>',
      label: 'Wigs & Hair',
    },
    {
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FCC7DE" width="100" height="100"/><text x="50" y="55" font-size="11" text-anchor="middle" dominant-baseline="middle" fill="%23270A36" font-weight="bold">Beauty</text></svg>',
      label: 'Makeup & Beauty',
    },
    {
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FFEAA7" width="100" height="100"/><text x="50" y="55" font-size="11" text-anchor="middle" dominant-baseline="middle" fill="%23270A36" font-weight="bold">Clothing</text></svg>',
      label: "Women's Clothing",
    },
    {
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23A8D8EA" width="100" height="100"/><text x="50" y="55" font-size="11" text-anchor="middle" dominant-baseline="middle" fill="%23270A36" font-weight="bold">Fashion</text></svg>',
      label: "Men's Fashion",
    },
    {
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23AAE4D3" width="100" height="100"/><text x="50" y="55" font-size="11" text-anchor="middle" dominant-baseline="middle" fill="%23270A36" font-weight="bold">Access.</text></svg>',
      label: 'Accessories',
    },
  ]

  return (
    <section className="bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <h2 className="font-inter text-xl font-black text-dark-text text-center mb-8">Popular Categories</h2>
        <div className="flex justify-center items-start gap-8 md:gap-6 sm:gap-4 flex-wrap">
          {categories.map((cat) => (
            <Category key={cat.label} {...cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
