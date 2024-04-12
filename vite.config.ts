import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(() => {
  const config = {
    plugins: [svelte()],
    base: "./",
  };
  if (process.env.DOCKER) {
    return {
      ...config,
      server: {
        host: "0.0.0.0",
      }
    };
  } else {
    return config;
  }
});
