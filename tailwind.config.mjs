/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkGray: '#3A3A3A',
				lightGray: '#F3F3F3',
				banner1: '#E5A41B',
				banner2: '#E61B1B',
				banner3: '#333847',
				banner4: '#E61B5B'
			}
		}
	},
	plugins: []
}
