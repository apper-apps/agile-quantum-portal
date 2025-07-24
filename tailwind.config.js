/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric': '#FF0066',
        'electric-dark': '#FF1493',
        'cyber-purple': '#8B00FF',
        'cyber-blue': '#00D4FF',
        'neon-pink': '#FF0080',
        'deep-black': '#000000',
        'near-black': '#0A0A0A',
        'success-glow': '#00FF88',
        'warning-glow': '#FFB800',
        'error-glow': '#FF3366',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 20px #FF0066, 0 0 40px #FF0066, 0 0 60px #FF0066',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 30px #FF0066, 0 0 60px #FF0066, 0 0 90px #FF0066',
            transform: 'scale(1.02)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' }
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'neural-pulse': {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.1)',
            filter: 'hue-rotate(90deg)'
          }
        },
        'hologram': {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'rotateY(0deg) rotateX(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            opacity: '0.9',
            transform: 'rotateY(90deg) rotateX(5deg)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'rotateY(180deg) rotateX(0deg)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            opacity: '0.9',
            transform: 'rotateY(270deg) rotateX(-5deg)',
            filter: 'hue-rotate(270deg)'
          }
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translate(0px, 0px) scale(1)',
            opacity: '0.3'
          },
          '33%': { 
            transform: 'translate(30px, -30px) scale(1.2)',
            opacity: '0.7'
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.8)',
            opacity: '0.5'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(255, 0, 102, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 102, 0.1) 1px, transparent 1px)',
        'neural-network': 'radial-gradient(circle at 25% 25%, rgba(139, 0, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
}