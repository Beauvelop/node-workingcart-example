let phones = require('../models/phones.js')


module.exports = {
  index: function(req, res, next) {
    res.status(200).json(phones);
  },
  selection: function(req, res, next) {
    let id = parseInt(req.params.id);
    res.status(200).json(phones[id]);
  },
  create: function(req, res, next) {
    let nuPhone = req.body;
    phones.push(nuPhone);
    res.status(200).json(phones);
  },
  update: function(req, res, next) {
    let id = parseInt(req.params.id);
    let edit = req.body;
    phones.splice(id, 1, edit)
    res.status(200).json(phones);
  },
  destroy: function(req, res, next) {
    let id = parseInt(req.params.id);
    phones.splice(id, 1);
    res.status(200).json(phones);
  }
}
