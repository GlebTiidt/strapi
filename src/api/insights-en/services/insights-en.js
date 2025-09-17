'use strict';

/**
 * insights-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::insights-en.insights-en');
