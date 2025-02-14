import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Weather-current-time-react-vite/', // Cambia "tu-repo" por el nombre de tu repositorio
})
