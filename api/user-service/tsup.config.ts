import { defineConfig } from "tsup";
import { tsconfigPathsPlugin } from "esbuild-plugin-tsconfig-paths";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  clean: true,
  sourcemap: true,
  dts: true,
  target: "es2022",

  esbuildPlugins: [tsconfigPathsPlugin()],
});
