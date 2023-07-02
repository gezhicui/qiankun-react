const { name } = require('./package');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  webpack: config => {
    config.output.library = `${name}=[name]`;
    config.output.libraryTarget = 'umd';
    //静态资源的公共路径
    config.output.publicPath = 'http://localhost:4000/';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    config.plugins.push(
      new ModuleFederationPlugin({
        name: 'mirco1',
        filename: 'remoteEntry.js',
        exposes: {
          './button': './src/components/Button',
        },
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      })
    );

    return config;
  },

  devServer: _ => {
    const config = _;
    config.headers = {
      'Access-control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.liveReload = false;
    return config;
  },
};
