const fs = require('fs');
const path = require('path');

const outDir = 'dist';
const publicDir = 'public';

const outputFiles = fs.readdirSync(outDir);

for (const file of outputFiles) {
  fs.unlinkSync(path.join(outDir, file));
}

const publicFiles = fs.readdirSync(publicDir);

for (const file of publicFiles) {
  fs.copyFileSync(path.join(publicDir, file), path.join(outDir, file));
}

require('esbuild')
  .build({
    entryPoints: ['src/App.tsx'],
    bundle: true,
    outdir: 'dist',
    minify: 'development' !== process.env.NODE_ENV,
    sourcemap: 'development' === process.env.NODE_ENV ? 'inline' : false,
    legalComments: 'none',
    watch: 'development' === process.env.NODE_ENV,
    splitting: true,
    logLevel: 'info',
    format: 'esm',
    loader: {
      '.png': 'dataurl',
      '.svg': 'dataurl',
    },
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
  })
  .catch((err) => {
    console.log(err);
    return process.exit(1);
  });
