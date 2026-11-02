import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub project pages are served under /style-os/, not at domain root.
  base: '/style-os/',
});
