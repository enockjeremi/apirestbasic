const express = require('express');
const router = express.Router();
const BasicController = require('../controllers/BasicController');

module.exports = function() {

    router.post('/basicmodels', 
        BasicController.postBasicModel
    );
    router.get('/basicmodels', 
        BasicController.getBasicModels
    );
    router.get('/basicmodels/:id', 
        BasicController.getBasicModel
    );
    router.put('/basicmodels/:id', 
        BasicController.putBasicModel
    );
    router.delete('/basicmodels/:id', 
        BasicController.deleteBasicModel
    );
    
    return router;
}