const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const StaticSourceData = require('static-source-data')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const webpack = require('webpack')
const path = require('path')

const paths = [
  '/',
  '/spaceships.html',
  '/spaceobjects.html',
  '/spaceobjects/moon.html',
  '/spaceships/buran.html'
]

module.exports = {
  entry: {
    styles: './src/styles.js',
    index: './src/index.jsx',
    htmlcss: './src/htmlcss.js',
    dictionary: './src/dictionary.js',
    jsbasics: './src/jsbasics.js',
    adcgame: './src/adcgame.js',
    ui: './src/ui.js',
    searchVanillaJS: './src/search-vanilla-js.js',
    search: './src/search.jsx',
    reactBasics: './src/react-basics.jsx',
    menubar: './src/menubar.jsx',
    'rails-integration': './src/rails-integration.js',
    'rails-auth': './src/rails-auth.js',
    'rails-spa': './src/rails-spa.js'
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
    new SitemapPlugin({ base: 'https://adc.ac', paths }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    new StaticSourceData({
      indexData: {
        url: 'https://api.airtable.com/v0/appwcTAYHNcwgwLzW/Homepage',
        headers: {
          Authorization:
            'Bearer patmmWEYvIcdQIv63.be336c1827dde9111bdbb74b62d1c2f0e753092cbb2cb61cdca9341601acd005'
        }
      }
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './index.html',
      chunks: ['styles', 'menubar', 'index']
    }),

    // Articles
    new HtmlWebpackPlugin({
      template: './src/spaceships.ejs',
      filename: './spaceships.html',
      chunks: ['styles', 'menubar']
    }),

    new HtmlWebpackPlugin({
      template: './src/spaceobjects.ejs',
      filename: './spaceobjects.html',
      chunks: ['styles', 'menubar']
    }),

    // Article
    new HtmlWebpackPlugin({
      template: './src/spaceships/buran.ejs',
      filename: './spaceships/buran.html',
      chunks: ['styles', 'menubar']
    }),

    new HtmlWebpackPlugin({
      template: './src/spaceobjects/moon.ejs',
      filename: './spaceobjects/moon.html',
      chunks: ['styles', 'menubar']
    }),

    new HtmlWebpackPlugin({
      template: './src/search.ejs',
      filename: './search.html',
      chunks: ['styles', 'menubar', 'search']
    }),

    new HtmlWebpackPlugin({
      template: './src/rails-integration.html',
      filename: './rails-integration.html',
      chunks: ['rails-integration']
    }),

    new HtmlWebpackPlugin({
      template: './src/rails-auth.html',
      filename: './rails-auth.html',
      chunks: ['rails-auth']
    }),

    new HtmlWebpackPlugin({
      template: './src/rails-spa.html',
      filename: './rails-spa.html',
      chunks: ['rails-spa']
    }),

    //
    //
    //

    new HtmlWebpackPlugin({
      template: './src/search-vanilla-js.html',
      filename: './search-vanilla-js.html',
      chunks: ['searchVanillaJS']
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

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
