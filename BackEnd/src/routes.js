const express = require('express');

const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const connection = require('./database/conection');

const routes = express.Router();

/*
routes.get('/ongs', a
});
*/

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/session', sessionController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;
