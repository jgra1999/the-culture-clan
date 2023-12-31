/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				hero1:
					"url('https://res.cloudinary.com/hothra/image/upload/v1692980732/the%20culture%20clan/drake_cfvohd.jpg')",
				hero2:
					"url('https://res.cloudinary.com/hothra/image/upload/v1693365899/the%20culture%20clan/pop_culture_pxrlfs.jpg')",
				hero3:
					"url('https://res.cloudinary.com/hothra/image/upload/v1693365898/the%20culture%20clan/urban_culture_mbgxha.png')",
				hero4:
					"url('https://res.cloudinary.com/df8nnzf8t/image/upload/v1698070843/Coleccion%20imagen/new-culture_roxoyu.png')",
				space404:
					"url('https://res.cloudinary.com/hothra/image/upload/v1695154549/the%20culture%20clan/404-bg_utmkeu.jpg')"
			},
			fontFamily: {
				bebas: ['var(--font-bebas-neue)']
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
