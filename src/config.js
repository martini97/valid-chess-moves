export default {
  http: {
    host: process.env.HTTP_HOST || '0.0.0.0',
    port: process.env.HTTP_PORT || '8080',
  },
};
