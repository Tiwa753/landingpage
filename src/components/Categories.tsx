import React from 'react'

interface CategoryProps {
  image: string
  label: string
}

const Category: React.FC<CategoryProps> = ({ image, label }) => (
  <div className="flex flex-col items-center gap-2.5 cursor-pointer">
    <div className="w-28 h-28 md:w-20 md:h-20 rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center hover:border-purple-main hover:scale-105 transition-all">
      <img src={image} alt={label} className="w-full h-full object-cover" />
    </div>
    <span className="text-sm md:text-xs font-semibold text-dark-text text-center">{label}</span>
  </div>
)

export const Categories: React.FC = () => {
  const categories: CategoryProps[] = [
    { image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23DCC7E8" width="100" height="100"/><text x="50" y="50" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="%23270A36">Wigs</text></svg>', label: 'Wigs & Hair' },
    { image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FCC7DE" width="100" height="100"/><text x="50" y="50" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="%23270A36">Beauty</text></svg>', label: 'Makeup & Beauty' },
    { image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23FFEAA7" width="100" height="100"/><text x="50" y="50" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="%23270A36">Clothing</text></svg>', label: "Women's Clothing" },
    { image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23A8D8EA" width="100" height="100"/><text x="50" y="50" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="%23270A36">Fashion</text></svg>', label: "Men's Fashion" },
    { image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23AAE4D3" width="100" height="100"/><text x="50" y="50" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="%23270A36">Access</text></svg>', label: 'Accessories' },
  ]

  return (
    <section className="py-12 md:py-7 px-10 md:px-4 bg-white max-w-6xl mx-auto">
      <h2 className="font-inter text-2xl font-black text-dark-text text-center mb-8">Popular Categories</h2>
      <div className="flex justify-center gap-8 md:gap-4 flex-wrap">
        {categories.map((cat) => (
          <Category key={cat.label} {...cat} />
        ))}
      </div>
    </section>
  )
}
