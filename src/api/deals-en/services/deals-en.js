'use strict';

/**
 * deals-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deals-en.deals-en');
