var express = require('express');
const { entercarts, allcarts, singleData, deletcarts, updatecarts} = require('../controller/cartsControl');
var router = express.Router();


router.post('/register',entercarts);
router.get('/allcarts',allcarts);
router.get('/carts/:id',singleData);
router.get('/delete/:id',deletcarts);
router.get('/updatecart/:id',updatecarts);



module.exports = router;