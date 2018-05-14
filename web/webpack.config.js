const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(`API_URL: ${process.env.API_URL}`);

const vendorList = [
  'react', 'react-dom', 'react-router-dom',
  'moment', '@babel/polyfill',
  '@material-ui/icons', 'material-ui'
];

const pluginList = [
  new webpack.DefinePlugin({
    process: {
      env: {
        API_URL: JSON.stringify(`${process.env.API_URL || 'http://localhost:3000'}`),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }
  }),
  new ExtractTextPlugin('clang-bundle.css'),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ko/)
];

module.exports = {
  devtool: 'source-map',
  entry: {
    main: ['@babel/polyfill',
      path.resolve(__dirname, 'src/index.jsx')],
    vendor: vendorList
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clang-bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000&name=fonts/[name].[ext]' },
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader', options: { name: '[path][name].[ext]' } }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: pluginList
};
