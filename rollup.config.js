import path from 'path';
import svelte from 'rollup-plugin-svelte';
import injectManifest from 'rollup-plugin-workbox-inject';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

const dist = path.resolve('dist/');

const envReplace = replace({
  'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
});

const main = {
  input: 'src/',
  output: {
    dir: dist,
    format: 'iife',
  },
  plugins: [
    svelte(),
    resolve(),
    copy({
      targets: [
        { src: 'src/manifest.json', dest: dist },
        { src: 'src/index.html', dest: dist },
        { src: 'src/assets', dest: dist },
      ]
    }),
    envReplace,
  ],
};

const sw = {
  input: 'src/workbox.js',
  output: {
    file: path.join(dist, 'sw.js'),
    format: 'iife',
  },
  plugins: [
    resolve(),
    envReplace,
    injectManifest({ globDirectory: dist, globPatterns: ['*'] }),
  ],
};

export default [main, sw];
