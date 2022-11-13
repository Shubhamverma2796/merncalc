const express = require('express');
const router = express.Router();


const {createKeys} = require('../controllers/keyController');

router.get('/',createKeys);


module.exports = router;