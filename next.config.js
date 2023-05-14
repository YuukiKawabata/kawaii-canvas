// next.config.js
module.exports = {
    webpackDevMiddleware: (config) => {
      config.watchOptions = {
        poll: 1000, // ファイルチェックの間隔（ミリ秒）
        aggregateTimeout: 300, // 再ビルドを遅らせる時間（ミリ秒）
      };
      return config;
    },
  };
  