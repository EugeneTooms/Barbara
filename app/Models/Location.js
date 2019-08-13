'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Location extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }
  locations() {
    return this.hasMany('App/Models/Location','id','parent_id')
  }
}

module.exports = Location
