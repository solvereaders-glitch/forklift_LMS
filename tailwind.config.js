/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          redDark: '#B91C1C',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
        },
        text: {
          primary: '#111827',
          secondary: '#374151',
          muted: '#6B7280',
        },
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
}
