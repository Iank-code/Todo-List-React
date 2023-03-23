import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    port: 4000,
    proxy: {
      "/users": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
});
