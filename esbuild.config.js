const fs = require("fs");
const path = require("path");
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'],
  outfile: "dist/index.js",
  bundle: true,
  minify: false,
  sourcemap: true,
  format: 'esm',
  target: ['esnext'],
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx'
  },
  jsx: "automatic",
  external: [
    "@ckeditor/ckeditor5-react",
    "@emotion/react", 
    "@emotion/styled",
    "ckeditor5-build-classic-mathtype",
    "react", 
    "react-dom", 
    "react/jsx-runtime", 
    "react-datepicker", 
    "react-day-picker",
    "react-bootstrap",
    "react-color",
    "react-contenteditable",
    "react-i18next",
    "react-resize-context",
    "react-select",
  ]
}).then(() => {
  const stylesDir = path.resolve("src/styles");
  const distDir = path.resolve("dist");

  fs.readdirSync(stylesDir).forEach(file => {
    if (file.endsWith(".css")) {
      fs.copyFileSync(path.join(stylesDir, file), path.join(distDir, file));
    }
  });
}).catch(() => process.exit(1));