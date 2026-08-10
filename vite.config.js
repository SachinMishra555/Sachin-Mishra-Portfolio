import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    // gzip for all assets > 1KB
    compression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }),
    // brotli — better compression ratio, supported by modern CDNs/hosts
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
  ],
  build: {
    target: 'es2015',
    // Warn if any chunk > 400KB
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        // Split vendor code into separate chunk for better caching
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react'],
        },
      },
    },
    // Minify with esbuild (default, fastest)
    minify: 'esbuild',
    // Enable source maps for production debugging (optional — remove if not needed)
    sourcemap: false,
    // Inline assets smaller than 4KB as base64
    assetsInlineLimit: 4096,
  },
})
