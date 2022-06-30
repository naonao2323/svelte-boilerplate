export default {
  mount: {
    "static": "/",
    "src": "/",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-typescript",
  ],
  alias: {
    "@app": "./src/components/container",
    "@ui": "./src/components/ui",
    "@modules": "./src/modules",
    "@types": "./src/types",
  },
  optimize: {
    entrypoints: ["index.html"],
    bundle: true,
    sourcemap: false,
    splitting: false,
    treeshake: true,
    manifest: false,
    minify: true,
    target: 'es2020',
  },
  packageOptions: {
    polyfillNode: true,
  },
  devOptions: {
    secure: false,
    port: 8000,
    open: "none",
    output: "stream",
    out: "public",
  },
  buildOptions: {
    out: "public",
    sourcemap: process.env.NODE_ENV !== "production",
  },
  routes: [],
  env: {
   
  }
};
