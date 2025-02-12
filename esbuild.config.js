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
    "react", 
    "react-dom", 
    "react-datepicker", 
    "react-select",
    "@mui/material", 
    "@mui/icons-material", 
    "@emotion/react", 
    "@emotion/styled",
    "@mui/x-date-pickers",
    "react-i18next",
    "react-day-picker",
    "react-bootstrap",
    "react-color",
    "react-contenteditable",
    "react-resize-context",
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