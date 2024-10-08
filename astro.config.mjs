// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import netlify from '@astrojs/netlify'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind()],
	output: 'hybrid',
	adapter: netlify()
})
