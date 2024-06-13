'use strict';

/**
 * workspace-preference service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workspace-preference.workspace-preference');
