'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string('name', 128).notNullable()
      table.string('product_name', 128)
      table.integer('group_id').unsigned().references('id').inTable('article_groups')
      table.string('packaging', 64).notNullable()
      table.string('sku', 64).notNullable()
      table.float('volume', 5, 2).notNullable()
      table.decimal('price_buy', 12, 4).notNullable()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
