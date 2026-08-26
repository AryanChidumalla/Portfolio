/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#F9F8F3',
          card: '#FFFFFF',
          surface: '#F2EFE9',
          border: '#0A0A0C',
        },
        ink: {
          DEFAULT: '#0A0A0C',
          muted: '#4B5563',
          dim: '#9CA3AF',
        },
        darkcanvas: {
          bg: '#0C0D11',
          card: '#161720',
          surface: '#1E202B',
          border: '#2A2D3A',
        },
        brutal: {
          yellow: '#FFE600',
          cyan: '#00D8F6',
          coral: '#FF4800',
          lime: '#C8F113',
          purple: '#E040FB',
          pink: '#FF2E93',
          blue: '#2563EB',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #0A0A0C',
        'brutal-sm': '2px 2px 0px 0px #0A0A0C',
        'brutal-lg': '6px 6px 0px 0px #0A0A0C',
        'brutal-xl': '8px 8px 0px 0px #0A0A0C',
        'brutal-yellow': '4px 4px 0px 0px #FFE600',
        'brutal-cyan': '4px 4px 0px 0px #00D8F6',
        'brutal-coral': '4px 4px 0px 0px #FF4800',
        'brutal-lime': '4px 4px 0px 0px #C8F113',
        'brutal-pink': '4px 4px 0px 0px #FF2E93',
        // Dark mode solid offset shadows
        'brutal-dark': '4px 4px 0px 0px #000000',
        'brutal-dark-lg': '6px 6px 0px 0px #000000',
      },
    },
  },
  plugins: [],
}
