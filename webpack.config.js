const path = require( 'path' );

module.exports = {
  entry: './src/app-webpack.js',
  output: {
    path: path.join( __dirname, 'public/assets' ),
    filename: 'bundle.js'
  }
};