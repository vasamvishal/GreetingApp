const express = require('express');
const router = express.Router();
const controller=require('../controller/Controller')
router.post('/',controller.greetings);
module.exports = router;