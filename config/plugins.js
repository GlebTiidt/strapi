'use strict';

module.exports = ({ env }) => {
  const enableCloud = env.bool('ENABLE_CLOUD_PLUGIN', false);
  const hasCloudinary =
    !!env('CLOUDINARY_CLOUD_NAME') &&
    !!env('CLOUDINARY_API_KEY') &&
    !!env('CLOUDINARY_API_SECRET');

  return {
    // GraphQL
    graphql: {
      enabled: true,
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,         // включить Playground в проде
        apolloServer: { introspection: true }, // и introspection
      },
    },

    ...(enableCloud && { cloud: { enabled: true } }),

    ...(hasCloudinary && {
      upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_CLOUD_NAME'),
            api_key: env('CLOUDINARY_API_KEY'),
            api_secret: env('CLOUDINARY_API_SECRET'),
          },
          actionOptions: { upload: {}, delete: {} },
        },
      },
    }),
  };
};