/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const truncateTables = require('../../test/db-reset.js')
const createPeep = require('../../test/Seeding-Peep')
require('dotenv').config()
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    TruncateUserTable() {
      console.log('running TruncateUserTable task')
      truncateTables()
      return null
    },
    CreatePeep() {
      console.log('Creating peep')
      createPeep()
      return null
    }
  }) 
}
