'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuppliersSchema extends Schema {
  up () {
    this.create('suppliers', (table) => {
      table.increments()
      table.string('name', 128).notNullable()
      table.string('oib', 11).notNullable()
      table.string('email', 128).notNullable()
      table.string('adress', 128).notNullable()
      table.string('iban', 64).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('suppliers')
  }
}

module.exports = SuppliersSchema
