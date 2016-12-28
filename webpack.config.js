module.exports = {
  devtool:'inline-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015','stage-0']
      }
    },
      { test: /.json/, loaders: 'json' }
      {test: /.scss/, loaders: ['style', 'css', 'sass']}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './',
    port: 3000
  }
};
