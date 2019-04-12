const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, 'index.js')
  },
  output: {
    libraryTarget: 'umd',
    filename: '[name].dev.js',
    path: path.resolve(__dirname, 'static'),
  },
  devServer: {
    // clientLogLevel: 'info',
    compress: false,
    contentBase: path.join(__dirname, './static'),
    publicPath: '/',
    // inline: false,
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
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: [
          'babel-loader', 
          {
            loader: 'source-map-loader',
            options: {enforce: 'pre'}
          }
        ]
      },
      {
        test: /\.styl$/i,
        include: path.resolve(__dirname, './'),
        exclude: path.resolve(__dirname, 'src/GLOBAL_CSS'),
        use:[ 
          'style-loader',
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
          'style-loader',
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
        use: 'file-loader'
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
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug', //in order to include multiple templates make sure to use multiple instances of the plugin
      inject: false,
    })
  ],
  optimization: {}
}