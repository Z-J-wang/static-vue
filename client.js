const { createBundleRenderer } = require('vue-server-renderer');
const path = require('path');

const template = require('fs').readFileSync(
  path.resolve(__dirname, './public/index.template.html'),
  'utf-8'
);
const serverBundle = require(path.resolve(
  __dirname,
  'dist/vue-ssr-server-bundle.json'
));
const clientManifest = require(path.resolve(
  __dirname,
  'dist/vue-ssr-client-manifest.json'
));

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest,
});
renderer
  .renderToString()
  .then((html) => {
    console.log(html);
  })
  .catch((error) => console.log(error));
