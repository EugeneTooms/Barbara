'use strict'
const Article = use('App/Models/Article')
const ArticleGroup = use('App/Models/ArticleGroup')
const Database = use('Database')

class ArticleController {
  async list(){
    const articles = await Database
      .select('articles.id', 'articles.name as name', 'articles.group_id', 'articles.packaging', 'articles.sku', 'articles.volume', 'articles.price_buy', 'article_groups.name as group_name' )
      .from('articles')
      .leftJoin('article_groups', 'articles.group_id', 'article_groups.id')
    return {
      message: 'Success',
      data: articles
    }
  }
  async single({params}){
    const article = await Article.find(params.id);
    return {
      message: 'Success',
      data: article
    }
  }
  async byGroup({params}){
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
      await Article.create(data)}
    catch(error){
      return {message: 'Error',
              error: error}
    }
    return{
      message: 'Success'
    }
  }
  async delete({params}){
    const article = await Article.find(params.id);
    try{
      await article.delete();
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

module.exports = ArticleController