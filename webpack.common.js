const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'node',
  entry: {
    home: './client/pages/home.js',
    dummy: './client/pages/dummy.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        include: path.resolve('node_modules'),
        sideEffects: false,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './client/core/'),
      '@components': path.resolve(__dirname, './client/components/'),
      '@containers': path.resolve(__dirname, './client/containers/'),
      '@services': path.resolve(__dirname, './client/services/'),
      '@stores': path.resolve(__dirname, './client/stores/'),
      '@styles': path.resolve(__dirname, './client/styles/'),
      '@utils': path.resolve(__dirname, './client/utils/'),
    },
  },
};
