import { defineConfig } from 'vite';

export default defineConfig({
  base: '/snake-game/',
  test: {
    globals: true,
    environment: 'node',
  },
});
