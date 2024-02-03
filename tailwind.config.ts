import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },

      colors: {
        'HF-yellow': '#FFD540',
        'HF-blue': '#3C479D',
        'HF-orange': '#F15A29',
        'HF-gray': '#EBECF5'
      },

      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif']
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: '100%' }
        },
        'accordion-up': {
          from: { height: '100%' },
          to: { height: '0' }
        }
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: []
}
export default config
