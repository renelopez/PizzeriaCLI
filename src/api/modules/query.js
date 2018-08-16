import merge from 'lodash.merge';


const controllers = {
  createOne: (model, body) => {
    model.create(body);
  },
  updateOne: (docToUpdate, update) => {
    merge(docToUpdate, update);
    return docToUpdate.save();
  },
  deleteOne: docToDelete => docToDelete.remove(),
  getOne: docToGet => Promise.resolve(docToGet),
  getAll: model => model.find({}),
  findByParam: (model, id) => model.findById(id),
};

const createOne = model => (req, res, next) => controllers.createOne(model, req.body)
  .then(doc => res.status(201).json(doc))
  .catch(err => next(err));

const updateOne = model => async (req, res, next) => {
  const docToUpdate = req.docFromId;
  const update = req.body;

  return controllers.updateOne(docToUpdate, update)
    .then(doc => res.status(201).json(doc))
    .catch(err => next(err));
};

const deleteOne = model => (req, res, next) => controllers.deleteOne(req.docFromId)
  .then(doc => res.status(201).json(doc))
  .catch(err => next(err));

const getOne = model => (req, res, next) => controllers.getOne(req.docToUpdate)
  .then(doc => res.status(200).json(doc))
  .catch(err => next(err));

const getAll = model => (req, res, next) => controllers.getOne(model)
  .then(doc => res.json(doc))
  .catch(err => next(err));

const findByParam = model => (req, res, next, id) => controllers.findByParam(model, id)
  .then((doc) => {
    if (!doc) {
      next(new Error('Not Found error'));
    } else {
      res.json(req.docFromId);
      next();
    }
  })
  .catch((error) => {
    next(error);
  });

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
  };
  return { ...defaults, ...overrides };
};
