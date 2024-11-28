import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
        outDir: ".dist", // Diretório de saída
        sourcemap: true, // Gera arquivos de sourcemap
        assetsDir: "assets", // Diretório para arquivos estáticos
        emptyOutDir: true, // Limpa o diretório antes do build
        minify: "esbuild", // Minificação (pode ser 'terser' ou 'esbuild')
    },
});
