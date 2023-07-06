var express = require('express');
const { enterproduct, allproducts,singleData, searchproduct, limitskipproduct, productcategory, category, deletproduct, updateproduct } = require('../controller/productControl');
var router = express.Router();


router.post('/register',enterproduct);
router.get('/allproducts',allproducts);
router.get('/allproducts/:id',singleData);
router.get('/search',searchproduct);
router.get('/limitskip',limitskipproduct);
router.get('/categories',productcategory);
router.get('/categories/:id', category);
router.get('/delet/:id', deletproduct);
router.get('/update/:id', updateproduct);



module.exports = router;
