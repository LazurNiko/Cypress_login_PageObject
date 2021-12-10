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
const faker = require("faker");
module.exports = (on, config) => {

  on("task", {
    newUser() {
      user = {
        userFirstName: faker.name.firstName() + `${Math.round(Math.random() * 100000)}`,
        userLastName: faker.name.lastName() + `${Math.round(Math.random() * 100000)}`,
        userJobTitle: faker.name.title() + `${Math.round(Math.random() * 100000)}`,
        userEmail: 'test' + `${Math.round(Math.random() * 100000)}` + '@mail.com',
        // userPhone: faker.name.Number() + `${Math.round(Math.random() * 100000)}`,
        userCompany: faker.name.firstName() + `${Math.round(Math.random() * 100000)}`
      };
      return user;
    },
  })

}
