'use strict'
const Article = use('App/Models/Article')
const Database = use('Database')

class ArticleController {
  async list(){
    const articles = await Database
      .select('articles.id', 'articles.product_name', 'articles.name as name', 'articles.group_id', 'articles.packaging', 'articles.sku', 'articles.volume', 'articles.price', 'article_groups.name as group_name' )
      .from('articles')
      .leftJoin('article_groups', 'articles.group_id', 'article_groups.id')
    Database.close();
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
