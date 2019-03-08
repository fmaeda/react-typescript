const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
  // babel: {
  //   plugins: ['babel-plugin-styled-components'],
  // },
};
