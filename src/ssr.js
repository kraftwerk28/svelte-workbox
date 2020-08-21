'use strict';
require('svelte/register');
const fs = require('fs');
const path = require('path');
const compiler = require('svelte/compiler');

const distDir = path.resolve(__dirname, '../dist-ssr');
const App = require('./App.svelte').default;

const appSource = fs.readFileSync(
  path.resolve(__dirname, 'App.svelte'),
  'utf-8'
);

const { html, head, css } = App.render();

const { js: { code } } = compiler.compile(appSource, {
  hydratable: true,
});

const contents = {
  'index.html': html,
  'styles.css': css,
  'index.js': code,
};
console.dir(contents);

for (const file in contents) {
  fs.writeFileSync(path.join(distDir, file), contents[file]);
}
