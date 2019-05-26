'use strict'
const Route = use('Route')
const Env = use('Env')

Route.group(() =>{
  Route.get('/', 'ArticleController.list')
  Route.get('/:id', 'ArticleController.single')
  Route.delete('/:id', 'ArticleController.delete')
  Route.post('/create', 'ArticleController.create')
}).prefix(Env.get('APP_API_URL')+'articles')

module.exports = Route
