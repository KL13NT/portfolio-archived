const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin")

module.exports = {
  mode: 'production',
  devtool: '',
  entry: {
    index: path.resolve(__dirname, 'index.js')
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].prod.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, './static'),
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    useLocalIp: true,
    watchContentBase: true,
    writeToDisk: false, 
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'babel-loader',
          'eslint-loader',
        ]
      },
      {
        test: /\.styl$/i,
        include: path.resolve(__dirname, './'),
        exclude: path.resolve(__dirname, 'src/GLOBAL_CSS'),
        use:[ 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', 
            options: {
              modules: 'local',
              localIdentName: '[local]___[hash:base64:5]',
            }
          },
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.styl$/i,
        include: path.resolve(__dirname, 'src/GLOBAL_CSS'),
        use:[ 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', 
            options: {
              modules: false,
              localIdentName: '[name]',
            }
          },
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/i,
        use: {loader: 'file-loader', options: {outputPath: './assets'}}
      },
      {
        test: /\.html/i,
        use: 'html-loader'
      },
      {
        test: /\.pug/i,
        use: ['html-loader','pug-html-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug', //NOTE: Two separate files are created to accommodate for dev server options
      inject: false,
      filename: './index.html'
    }),
    new CompressionPlugin({
      test: /\.(js|svg|png|jpg|webp|css)$/i,
      cache: true,
      algorithm: 'gzip',
      threshold: 200*1024
    }),
    new ImageminPlugin({
      minFileSize: 2024 * 20,
      pngquant: {quality: '40-40'},
      plugins: [imageminMozjpeg({quality: 30})]
    }),
    new ImageminWebpWebpackPlugin({config: [{test: /\.(jpe?g|png)/,options: {quality: 30}}]})
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssets(),
      new UglifyJsPlugin({
        cache: false,
        parallel: false,
        sourceMap: false
      }),
    ],
    splitChunks: {
      chunks: 'all'
    }
  }
}