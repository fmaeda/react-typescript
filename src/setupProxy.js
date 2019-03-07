const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    proxy('/api', {
      // target: 'http://172.29.9.93:8880',
      // target: 'http://172.30.7.226:8880',
      target: 'http://localhost:3030',
      pathRewrite: {
        '^/api': '/',
        // '^/chatbot/local': '/facedetect',
        // '^/chatbot/local': '/upload',
      },
    }),
  );
  app.use(
    proxy('/stubs', {
      target: 'http://172.29.9.93:8800',
      // pathRewrite: {
      //   '^/chatbot/api': '/',
      // },
    }),
  );
};
