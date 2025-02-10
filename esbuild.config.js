const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'],
  outdir: 'dist',
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
}).catch(() => process.exit(1));