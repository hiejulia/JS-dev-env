import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [

    //create html file the includes ref to bundle js
    new HtmlWebpackPlugin({
      template:'src/index.html',
      minify: {
        removeComments:true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true

      },
      inject: true,
      //properties you define here are available in index.html
      //using htmlwebpackplugin.options.varname
      trackJSToken:'f7c774d732b1425bbc17a352d43cb9d7'
    }),
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
