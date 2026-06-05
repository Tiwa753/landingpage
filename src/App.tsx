import React from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { ProductsGrid } from './components/ProductsGrid'
import { WhyGlamLens } from './components/WhyGlamLens'
import { Footer } from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <Navigation />
      <main className="mx-auto">
        <Hero />
        <Categories />
        <ProductsGrid />
        <WhyGlamLens />
      </main>
      <Footer />
    </div>
  )
}

export default App
