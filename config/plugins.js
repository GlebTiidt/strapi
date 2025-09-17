'use strict';

module.exports = ({ env }) => {
  const enableCloud = env.bool('ENABLE_CLOUD_PLUGIN', false);
  const enableTransfer = env.bool('ENABLE_TRANSFER_PLUGIN', false);

  const hasCloudinary =
    !!env('CLOUDINARY_CLOUD_NAME') &&
    !!env('CLOUDINARY_API_KEY') &&
    !!env('CLOUDINARY_API_SECRET');

  return {
    ...(enableCloud && { cloud: { enabled: true } }),

    // включаем ТОЛЬКО когда явно задано ENABLE_TRANSFER_PLUGIN=true (в облаке)
    ...(enableTransfer && { transfer: { enabled: true } }),

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
