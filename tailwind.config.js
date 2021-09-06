module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      current: '#fb236a',
      gray: '#E5E7EB',
      textgray: '#6B7280',
      lightgreen: '#7dc246',
      lightpurple: '#8b91dd',
      secondarygreen: '#26ae61',
      fuchsia: '#fb236a',
      fuchsialight: '#af28d1',
      blue: 'rgb(30, 64, 175)',
      bggray: "#F4F4F2",
      darkblue: '#24324a',
      footerdark: '#1d293e',
      secondarpurple: '#7868E6',
      lightred: '#F8485E',
      purpleprimary: '#CEDDEF',
      black:"#000"
      
      

    },
    container: {
      center: true,
    },
    fontSize:{
      
      tiny : '12px',
      
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xs: '0.75rem',
      '3xl': '1.875rem',
      '2xl': '1.5rem'
 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
