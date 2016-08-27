import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
/* eslint-disable no-console */
process.env.NODE_ENV = 'production';

console.log('Generationg minified bundle for production via webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats)=> {
  return 0;
});
