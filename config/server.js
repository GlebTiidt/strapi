module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL'),   // важно для Strapi Cloud / reverse proxy
  proxy: true,
  app: { keys: env.array('APP_KEYS') },
});
