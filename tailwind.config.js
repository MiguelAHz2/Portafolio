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
          light: '#1d4ed8',
          DEFAULT: '#2563eb',
          dark: '#60a5fa',
        },
        accent: {
          light: '#0e7490',
          DEFAULT: '#0891b2',
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
          light: '#0f172a',
          muted: '#475569',
          dark: '#f8fafc',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        'nav': '0 4px 6px -1px rgba(0,0,0,0.1)',
        'nav-dark': '0 2px 4px 0 rgba(0,0,0,0.2)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18)',
        'hover': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
        'hover-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'colors-transform': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
} 