import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import path from "node:path";

export default defineConfig({
  // Garante que os caminhos dos arquivos sejam relativos (evita tela branca)
  base: './',
  
  plugins: [
    react(), 
    tailwindcss(), 
    jsxLocPlugin()
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  root: path.resolve(import.meta.dirname, "client"),

  build: {
    // Define a saída para a pasta dist na raiz
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    // Remove sourcemaps para o build ser mais rápido e leve
    sourcemap: false,
  },

  server: {
    port: 3000,
    host: true,
  }
});