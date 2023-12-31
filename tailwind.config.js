/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
      fontFamily:{
      sans: 'var(--font-roboto)',
      alt: 'var(--font-bai-jamjuree)',
      },
      colors:{
        gray:{
          50: '#eaeaea',
          100:'#bebebf',
          200:'#9e9ea0',
          300:'#727275',
          400:'#56565a',
          500:'#2c2c31',
          600:'#28282d',
          700:'#1f1f23',
          800:'#18181b',
          900:'#121215',
          950: '#09090a'
        },
        rose: {
          500: '#FF4365'
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
     
    },
  },
  plugins: [require("tailwindcss-animate"),require("@material-tailwind/react/utils/withMT")],
}