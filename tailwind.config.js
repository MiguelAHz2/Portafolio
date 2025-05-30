/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      colors: {
        primary: {
          light: '#ffffff',
          DEFAULT: '#f8fafc',
          dark: '#0f172a',
        },
        secondary: {
          light: '#2563eb',
          DEFAULT: '#3b82f6',
          dark: '#60a5fa',
        },
        accent: {
          light: '#0891b2',
          DEFAULT: '#06b6d4',
          dark: '#22d3ee',
        },
        background: {
          light: '#f8fafc',
          DEFAULT: '#f1f5f9',
          dark: '#111827',
          darker: '#0f172a',
        },
        surface: {
          light: '#ffffff',
          dark: '#1e293b',
          darker: '#0f172a',
        },
        text: {
          light: '#1e293b',
          muted: '#64748b',
          dark: '#f8fafc',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        'nav': '0 2px 4px 0 rgba(0,0,0,0.05)',
        'nav-dark': '0 2px 4px 0 rgba(0,0,0,0.2)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hover-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to right, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 