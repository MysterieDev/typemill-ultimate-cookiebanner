import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: "..",
    polyfillDynamicImport: false,
    rollupOptions: {
      output: {
        compact: true,
        entryFileNames: `public/cookiebanner-[name].min.js`,
        chunkFileNames: `public/cookiebanner-[name].min.js`,
        assetFileNames: `public/cookiebanner-assets.[ext]`,
      },
    },
  },
});
