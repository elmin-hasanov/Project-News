import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.VITE_NEWS": JSON.stringify(process.env.VITE_NEWS),
  },
});
