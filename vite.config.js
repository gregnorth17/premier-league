import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/

export default defineConfig({
  define: {
    'process.env': {
      VITE_API_KEY: JSON.stringify(import.meta.env.VITE_API_KEY),
    },
  },
  plugins: [react()],
})
