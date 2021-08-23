import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: "../public",
    polyfillDynamicImport: false,
    rollupOptions: {
      output: {
        compact: true,
        entryFileNames: `cookiebanner-[name].min.js`,
        chunkFileNames: `cookiebanner-[name].min.js`,
        assetFileNames: `cookiebanner-assets.[ext]`,
      },
    },
  },
});
