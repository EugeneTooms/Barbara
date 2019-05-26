'use strict'
const ArticleGroup = use('App/Models/ArticleGroup');

class ArticleGroupController {
  async list(){
    const articlegroups = await ArticleGroup.all();
    return {
      message: 'Success',
      data: articlegroups
    }
  }
  async single({params}){
    const articlegroup = await ArticleGroup.find(params.id);
    return {
      message: 'Success',
      data: articlegroup
    }
  }
  async articleList({params}){
    const articlegroup = await ArticleGroup.find(params.id);
    const articles = await articlegroup.articles().fetch();
    return {
      message: 'Success',
      data: articles
    }
  }
  async create({request}){
    const data = request.body;
    try {
      await ArticleGroup.create(data)}
    catch(error){
      return {message: 'Error',
              error: error}
    }
    return{
      message: 'Success'
    }
  }
  async delete({params}){
    const articlegroup = await ArticleGroup.find(params.id);
    try{
      await articlegroup.delete();
    }
    catch(error){
      return {message: 'Error',
              error: error}
    }
    return{
      message: 'Success'
    }
  }
}

module.exports = ArticleGroupController
