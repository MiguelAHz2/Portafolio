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
          dark: '#0a0a0a',
        },
        secondary: {
          light: '#6366f1',
          DEFAULT: '#8b5cf6',
          dark: '#a855f7',
        },
        accent: {
          light: '#06b6d4',
          DEFAULT: '#0891b2',
          dark: '#22d3ee',
        },
        background: {
          light: '#fafafa',
          DEFAULT: '#f5f5f5',
          dark: '#0a0a0a',
          darker: '#000000',
        },
        surface: {
          light: '#ffffff',
          dark: '#1a1a1a',
          darker: '#0f0f0f',
        },
        text: {
          light: '#1a1a1a',
          muted: '#6b7280',
          dark: '#fafafa',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      boxShadow: {
        'nav': '0 4px 6px -1px rgba(0,0,0,0.1)',
        'nav-dark': '0 2px 4px 0 rgba(0,0,0,0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hover-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-dark': '0 0 20px rgba(168, 85, 247, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-modern': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-electric': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 75%, #f5576c 100%)',
      },
      transitionProperty: {
        'colors-transform': 'color, background-color, border-color, text-decoration-color',
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