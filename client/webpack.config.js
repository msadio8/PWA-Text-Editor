const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = (env, argv) => {

  // const injectManifest = new InjectManifest({
  //   swSrc: './src-sw.js',
  //   swDest: 'src-sw.js',
  //   ...(argv.mode !== 'production' ? { exclude: [/./] } : {}),
  // });

  // if (argv.mode !== 'production') {
  //   // In dev, suppress the "InjectManifest has been called multiple times" warning by reaching into
  //   // the private properties of the plugin and making sure it never ends up in the state
  //   // where it makes that warning.
  //   Object.defineProperty(injectManifest, 'alreadyCalled', {
  //     get() {
  //       return false;
  //     },
  //     set() {
  //       // do nothing; the internals try to set it to true, which then results in a warning
  //       // on the next run of webpack.
  //     },
  //   });
  // }

  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [ 

      // Webpack plugin that generates our html file and injects our bundles.
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Just Another Text Editor',
      }),
      
      // Injects our custom service worker
      // injectManifest,
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest:'src-sw.js',
      }),

      // Creates a manifest.json file.
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'Create note Online or Offline!',
        background_color: '#272822',
        theme_color: '#272822',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        // add CSS loaders to webpack
        {
          test: /\.css$/i,
          use: ['style-loader','css-loader'],
        },
        //add babel 
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          // We use babel-loader in order to use ES6.
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/transform-runtime',
              ],
            },
          },
        },
      ],
    },
  };
};
