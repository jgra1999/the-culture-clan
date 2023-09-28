import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	image: {
		domains: ['cloudinary.com'],
		remotePatterns: [{ protocol: 'https' }]
	}
})

//TODO: Si no lo utilizare, ver documentacion para desactivar error de produccion causado por sharp
