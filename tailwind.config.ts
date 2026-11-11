import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			portfolio: {
  				bg: '#0A0A0A',
  				surface: '#141414',
  				text: '#F5F5F5',
  				muted: '#878787',
  				stroke: '#1F1F1F'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'SF Pro Display',
				'SF Pro Text',
				'Helvetica Neue',
				'Segoe UI',
				'system-ui',
				'sans-serif'
			],
			display: [
				'Playfair Display',
				'Georgia',
				'Times New Roman',
				'serif'
			],
			body: ['Inter', 'sans-serif'],
			instrument: ['"Instrument Serif"', 'serif']
		},
		keyframes: {
			'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
			'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
			'scroll-down': { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(200%)' } },
			'role-fade-in': { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
			'gradient-shift': { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
			shimmer: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '-200% 0' } }
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
			'role-fade-in': 'role-fade-in 0.4s ease-out',
			'gradient-shift': 'gradient-shift 6s ease infinite',
			shimmer: 'shimmer 2s linear infinite'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
