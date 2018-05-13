'use strict'

const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
  normalizeCss: join(__dirname, '..', 'node_modules', 'normalize.css'),
}

module.exports = {
  paths,
  entry: join(paths.src, 'index'),

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPLuginConfig: {
    title: 'GitHub App',
    template: join(paths.src, 'html', 'template.html')
  },

  standardPreLoader: {
    test: /\.js$/,
    enforce: 'pre',
    include: paths.src,
    use: {
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/,
    include: [paths.src, paths.normalizeCss],
    use: ['style-loader', 'css-loader']
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
},

  resolve: {
    alias: {
      src: paths.src,
      utils: join(paths.src, 'utils'),
      components: join(paths.src, 'components')
    }
  }

}