import merge from 'lodash.merge';


const controllers = {
  createOne:(model,body) =>{
    model.create(body);
  },
  updateOne:(docToUpdate,update)=>{
    merge(docToUpdate,update);
    return docToUpdate.save();
  },
  deleteOne:(docToDelete)=>{
    return docToDelete.remove();
  },
  getOne:(docToGet) =>{
    return Promise.resolve(docToGet);
  },
  getAll:(model) =>{
    return model.find({})
  },
  findByParam:(model,id) =>{
    return model.findById(id);
  }
};

