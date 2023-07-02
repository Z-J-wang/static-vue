const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');
let serverBundlePath = path.resolve(
  __dirname,
  'dist/vue-ssr-server-bundle.json'
);
const renderer = createBundleRenderer(serverBundlePath, {
  // ……renderer 的其他选项
});
renderer
  .renderToString()
  .then((html) => {
    console.log(html);
  })
  .catch((error) => console.log(error));
