import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use conditional base URL for different deployment platforms
  base: mode === 'production' ? "/" : "/",
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
}));

