import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  image: {
    domains: ['cloudinary.com'],
    remotePatterns: [{
      protocol: 'https'
    }]
  },
  adapter: netlify()
});

//TODO: Si no lo utilizare, ver documentacion para desactivar error de produccion causado por sharp