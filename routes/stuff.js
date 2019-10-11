const express = require('express');
const Router = express.Router();

const Thing = require('../models/thing');
const stuffCtrl = require('../controllers/stuff');

Router.get('/', stuffCtrl.getThingById);
Router.post('/', stuffCtrl.createThing);
Router.get('/:id', stuffCtrl.getThing);
Router.put('/:id', stuffCtrl.editThing);
Router.delete('/:id',stuffCtrl.deleteThing);

module.exports = Router;