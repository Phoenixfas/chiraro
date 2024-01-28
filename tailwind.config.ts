import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'animateWaves-3': 'animateWaves 3s linear infinite',
        'animateWaves-4': 'animateWaves 4s linear infinite',
        'animateWaves-r-3': 'animateWavesR 3s linear infinite',
        'animateWaves-r-4': 'animateWavesR 4s linear infinite',
      },
      keyframes: {
        animateWaves: {
          '0%': { backgroundPositionX: '1000px' },
          '100%': { backgroundPositionX: '0px' },
        },
        animateWavesR: {
          '0%': { backgroundPositionX: '-1000px' },
          '100%': { backgroundPositionX: '0px' },
        },
      },
    },
  },
  plugins: [],
}
export default config
