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
  async locationList({params}){
    const parent = await Location.find(params.id);
    const locations = await parent.locations().fetch();
    return {
      message: 'Success',
      data: locations
    }
  }
}

module.exports = LocationController
