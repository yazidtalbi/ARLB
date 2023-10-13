import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import compressor from "astro-compressor";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), compressor({ gzip: true, brotli: false })],  
  headers: [
    {
      source : "**/*.@(gz|gzip)",
      headers : [{
        "key" : "Content-Encoding",
        "value" : "gzip"
      }]
    }
  ]

});
