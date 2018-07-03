import path from 'path';

export default {
  entry:path.resolve(__dirname, 'src/index.js'),
  target: 'web',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  module:{
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(html)$/, use:['html-loader']}]
      }
}
