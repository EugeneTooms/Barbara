'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationsSchema extends Schema {
  up () {
    this.create('locations', (table) => {
      table.increments()
      table.string('name', 45).notNullable()
      table.string('position', 8).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('locations')
  }
}

module.exports = LocationsSchema
