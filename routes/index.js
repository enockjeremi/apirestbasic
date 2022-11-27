const express = require('express');
const router = express.Router();
const BasicController = require('../controllers/BasicController');

module.exports = function() {
    
    router.post('/basicmodel', 
        BasicController.postBasicModel
    );
    router.get('/basicmodel', 
        BasicController.getBasicModels
    );
    router.get('/basicmodel/:id', 
        BasicController.getBasicModel
    );
    router.put('/basicmodel/:id', 
        BasicController.putBasicModel
    );
    router.delete('/basicmodel/:id', 
        BasicController.deleteBasicModel
    );
    
    return router;
}