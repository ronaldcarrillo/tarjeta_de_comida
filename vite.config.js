import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://ronaldcarrillo.github.io/tarjeta_de_comida'
});
