var express = require('express');
const { entertodos, alltodos, singletodos, delettodos, updatetodos, limitskiptodos, randomtodos } = require('../controller/todoControl');
var router = express.Router();


router.post('/register',entertodos);
router.get('/alltodos',alltodos);
router.get('/singletodos/:id',singletodos);
router.get('/delet/:id', delettodos);
router.get('/update/:id', updatetodos);
router.get('/limitskip', limitskiptodos);
router.get('/random', randomtodos);



module.exports = router;