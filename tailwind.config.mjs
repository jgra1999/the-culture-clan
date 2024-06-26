/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix: '',
	theme: {
		container: {
			center: true
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},

			backgroundImage: {
				space404:
					"url('https://res.cloudinary.com/hothra/image/upload/v1695154549/the%20culture%20clan/404-bg_utmkeu.jpg')"
			},

			colors: {
				primary: '#5c6ac4',
				secondary: '#ecc94b',
				darkGray: '#181818',
				lightGray: '#D5D5D5',
				mediumGray: '#363636',
				grayText: '#6f6f6f'
				// ...
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
}
