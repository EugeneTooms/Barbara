'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocationsSchema extends Schema {
  up () {
    this.create('locations', (table) => {
      table.increments()
      table.string('name', 45).notNullable()
      table.integer('level')
      table.integer('parent_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('locations')
  }
}

module.exports = LocationsSchema
