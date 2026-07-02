/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#0B0B0F',
        panel: '#121214',
        line: 'rgba(255,255,255,0.08)',
        ink: '#F4F4F5',
        mute: '#9CA3AF',
        signal: {
          violet: '#8B5CF6',
          azure: '#3B82F6',
          ember: '#F97316',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient': 'linear-gradient(115deg, #8B5CF6 0%, #3B82F6 50%, #F97316 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139,92,246,0.35)',
      },
    },
  },
  plugins: [],
}
