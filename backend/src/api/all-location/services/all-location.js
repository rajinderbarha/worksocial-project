'use strict';

/**
 * all-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-location.all-location');
