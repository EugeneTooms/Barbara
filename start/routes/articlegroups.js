'use strict'
const Route = use('Route')
const Env = use('Env')

Route.group(() =>{
  Route.get('/', 'ArticleGroupController.list')
  Route.get('/:id', 'ArticleGroupController.single')
  Route.get('/:id/articles', 'ArticleGroupController.articleList')
  Route.delete('/:id', 'ArticleGroupController.delete')
  Route.post('/create', 'ArticleGroupController.create')
}).prefix(Env.get('APP_API_URL')+'articlegroups')

module.exports = Route
