'use strict';

/**
 * events-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-en.events-en');
