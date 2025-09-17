'use strict';

/**
 * news-ru service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-ru.news-ru');
