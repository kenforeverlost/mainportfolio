import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#00386B',
          secondary: '#0058AB',
          accent: '#6B3200',
          neutral: '#AACCDD',
          'base-100': '#E3E7EA',
          info: '#1869C5',
          success: '#16A111',
          warning: '#F1BD00',
          error: '#B00007',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
} satisfies Config
