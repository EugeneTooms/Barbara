'use strict'
const Supplier = use('App/Models/Supplier')
class SupplierController {
  async list(){
    const suppliers = await Supplier.all();
    return {
      message: 'Success',
      data: suppliers
    }
  }
  async single({params}){
    const supplier = await Supplier.find(params.id);
    return {
      message: 'Success',
      data: supplier
    }
  }
  async create({request}){
    const data = request.body;

    try {
      await Supplier.create(data)}
    catch(error){
      return {message: 'Error',
              error: error}
    }
    return{
      message: 'Success'
    }
  }
  async delete({params}){
    const supplier = await Supplier.find(params.id);
    try{
      await supplier.delete();
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

module.exports = SupplierController
