const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    htmlcss: './src/htmlcss.js',
    dictionary: './src/dictionary.js',
    jsbasics: './src/jsbasics.js',
    adcgame: './src/adcgame.js',
    ui: './src/ui.js',
    searchVanillaJS: './src/search-vanilla-js.js',
    search: './src/search.jsx',
    reactBasics: './src/react-basics.jsx',
    searchBar: './src/searchbar.jsx'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
    // clear: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|svg|jpg|jpeg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'searchBar']
    }),

    new HtmlWebpackPlugin({
      template: './src/search-vanilla-js.html',
      filename: './search-vanilla-js.html',
      chunks: ['searchVanillaJS', 'searchBar']
    }),

    new HtmlWebpackPlugin({
      template: './src/react-basics.html',
      filename: './react-basics.html',
      chunks: ['reactBasics']
    }),

    new HtmlWebpackPlugin({
      template: './src/simplegrid.html',
      filename: './simplegrid.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/modulargrid.html',
      filename: './modulargrid.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/complexgrid.html',
      filename: './complexgrid.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: './ui.html',
      chunks: ['ui']
    }),

    new HtmlWebpackPlugin({
      template: './src/htmlcss.html',
      filename: './htmlcss.html',
      chunks: ['htmlcss']
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/dictionary.html',
      filename: './dictionary.html',
      chunks: ['dictionary']
    }),

    new HtmlWebpackPlugin({
      template: './src/jsbasics.html',
      filename: './jsbasics.html',
      chunks: ['jsbasics']
    }),

    new HtmlWebpackPlugin({
      template: './src/adcgame.html',
      filename: './adcgame.html',
      chunks: ['adcgame']
    }),

    // Articles
    new HtmlWebpackPlugin({
      template: './src/spaceships.html',
      filename: './spaceships.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/spaceobjects.html',
      filename: './spaceobjects.html',
      chunks: ['index']
    }),

    // Article
    new HtmlWebpackPlugin({
      template: './src/spaceships/buran.html',
      filename: './spaceships/buran.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/spaceobjects/moon.html',
      filename: './spaceobjects/moon.html',
      chunks: ['index', 'searchBar']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
