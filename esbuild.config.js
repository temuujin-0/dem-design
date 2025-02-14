import { readdirSync, copyFileSync } from "fs";
import { resolve, join } from "path";
import { fileURLToPath } from "url";
import esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

esbuild.build({
  entryPoints: ["src/index.js"],
  outfile: "dist/index.js",
  bundle: true,
  minify: false,
  sourcemap: true,
  format: "esm",
  target: ["esnext"],
  loader: {
    ".js": "jsx",
    ".jsx": "jsx"
  },
  jsx: "automatic",
  external: [
    "react", 
    "react-dom", 
    "react/jsx-runtime", 
    "react-datepicker", 
    "react-select",
    "@emotion/react", 
    "@emotion/styled",
    "react-i18next",
    "react-bootstrap",
    "react-color",
    "react-contenteditable",
    "react-resize-context"
  ]
}).then(() => {
  const stylesDir = resolve(__dirname, "src/styles");
  const distDir = resolve(__dirname, "dist");

  readdirSync(stylesDir).forEach(file => {
    if (file.endsWith(".css")) {
      copyFileSync(join(stylesDir, file), join(distDir, file));
    }
  });
}).catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});