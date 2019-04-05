import autoprefixer from 'autoprefixer'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const dev = {
  mode: 'development',

  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client',
    './src/client',
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: process.env.PORT || '8000',
  },

  output: {
    filename: '[name].js',
    publicPath: '/',
    path: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    '>2%',
                    'last 2 versions',
                  ],
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],
}

export default dev
