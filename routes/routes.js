const express = require('express');
const router = express.Router();
const controller=require('../controller/Controller')
router.post('/',controller.registerGreetings);
router.get('/getAllDetails',controller.getAllregisteredDetails)
router.get('/getById',controller.getByIdAllDetails);
router.put('/update/:Id',controller.updateGreetings);
router.delete('/deleteById/:Id',controller.deleteByIdDetails);
module.exports = router;