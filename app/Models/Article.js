'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }
  articlegroups () {
    return this.belongsTo('App/Models/ArticleGroup','id','group_id')
  }
}

module.exports = Article
