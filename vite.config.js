import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/simple-cryptografy/' // Ändra detta till ditt repo-namn
})