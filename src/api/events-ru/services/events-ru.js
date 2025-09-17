'use strict';

/**
 * events-ru service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-ru.events-ru');
