'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArticleGroup extends Model {
  articles() {
    return this.hasMany('App/Models/Article','id','group_id')
  }
}

module.exports = ArticleGroup
