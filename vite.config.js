// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // o 'src' si tu index.html está dentro de /src
  server: {
    open: true, // abre el navegador automáticamente
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/main.scss";`
      }
    }
  }
});
