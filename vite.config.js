import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PenduPokemon-React/' // Remplacez 'mon-app' par le nom de votre dépôt GitHub
});