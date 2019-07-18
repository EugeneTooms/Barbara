'use strict'
const Location = use('App/Models/Location')
class LocationController {
  async list(){
    const locations = await Location.all();
    return {
      message: 'Success',
      data: locations
    }
  }
}

module.exports = LocationController
