import React from 'react'

export const Footer: React.FC = () => (
  <>
    {/* CTA Section */}
    <section className="bg-white text-center py-16 md:py-10 px-10 md:px-4 border-t border-border-light max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-2 font-inter text-2xl font-black text-dark-text mb-5">
        <div className="w-8 h-8 bg-purple-dark rounded-full flex items-center justify-center text-white">
          G
        </div>
        GlamLens
      </div>
      <h2 className="font-inter text-3xl font-black text-dark-text mb-2.5">Ready to Try?</h2>
      <p className="text-xs text-gray-600 mb-1.5">Download our app or visit our website</p>
      <p className="text-xs text-gray-600 mb-7">Seamlessly try on fashion before you buy</p>
    </section>

    {/* Footer Bottom */}
    <footer className="border-t border-border-light py-4 px-10 md:px-4 flex items-center justify-between md:flex-col md:gap-3 md:text-center">
      <div className="flex gap-3.5">
        {['f', 'i', 'x', 't'].map((icon) => (
          <button
            key={icon}
            className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs text-gray-600 hover:border-purple-main hover:text-purple-main transition-all"
            title={`Social icon ${icon}`}
          >
            {icon}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-600">© 2024 GlamLens. All rights reserved.</p>
    </footer>
  </>
)
