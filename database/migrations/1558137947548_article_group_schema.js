'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleGroupSchema extends Schema {
  up () {
    this.create('article_groups', (table) => {
      table.increments()
      table.string('name', 128).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('article_groups')
  }
}

module.exports = ArticleGroupSchema
