import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env,
    },

    plugins: [svelte(), tsconfigPaths()],
    server: {
      port: 3010,
    },
    build: {
      target: "esnext",
    },
  });
};
