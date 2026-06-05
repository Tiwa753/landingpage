/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#270A36',
        'purple-main': '#965AB4',
        'accent-orange': '#FF6A3D',
        'dark-text': '#171717',
        'light-grey': '#979797',
        'border-light': '#e5e5e5',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'general-sans': ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&auto=format&fit=crop&q=80')",
      },
    },
  },
  plugins: [],
}
