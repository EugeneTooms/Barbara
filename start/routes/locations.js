'use strict'
const Route = use('Route')
const Env = use('Env')

Route.group(() =>{
  Route.get('/', 'LocationController.list')
  Route.get('/:id/locations', 'LocationController.locationList')
  //Route.get('/:id', 'SupplierController.single')
  //Route.delete('/:id', 'SupplierController.delete')
  //Route.post('/create', 'SupplierController.create')
}).prefix(Env.get('APP_API_URL')+'locations')

module.exports = Route
