const path = require('path');

module.exports = {
  entry: {
    main: './src/index.ts',
    sw: './src/sw.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/dist'),
  },
  devServer: {
    static: path.join(__dirname, "static"),
    compress: true,
    port: 4000,
  },
  devtool: "eval",
};