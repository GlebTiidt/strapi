'use strict';

/**
 * news-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-en.news-en');
