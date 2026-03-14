import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2647',
          light: '#144272',
          dark: '#061a33',
          50: '#f0f4f9',
          100: '#d6e1ed',
          200: '#a8bfd6',
          800: '#0c2d52',
          900: '#081e38',
        },
        teal: {
          DEFAULT: '#1B9C85',
          light: '#2BC4A8',
          dark: '#14796A',
          50: '#edfaf7',
          100: '#c8f0e7',
          500: '#1B9C85',
        },
        amber: {
          DEFAULT: '#FFB800',
          light: '#FFCB45',
          dark: '#E5A600',
          50: '#fffbeb',
          100: '#fff3c4',
          500: '#FFB800',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          light: '#FF8E75',
          dark: '#E55534',
          50: '#fff3f0',
          100: '#ffe0d9',
          500: '#FF6B4A',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'glow-teal': '0 0 30px rgba(27, 156, 133, 0.3)',
        'glow-coral': '0 0 30px rgba(255, 107, 74, 0.3)',
        'glow-navy': '0 0 30px rgba(10, 38, 71, 0.3)',
        'card': '0 4px 24px rgba(10, 38, 71, 0.06)',
        'card-hover': '0 8px 40px rgba(10, 38, 71, 0.12)',
        'elevated': '0 20px 60px rgba(10, 38, 71, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
