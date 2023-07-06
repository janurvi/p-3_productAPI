var express = require('express');
const { entercomment, allcomment, singlecomment, deletcomment, updatecomment, limitskipcomment, userIdcomment } = require('../controller/commentControl');
var router = express.Router();


router.post('/register',entercomment);
router.get('/allcomment',allcomment);
router.get('/comment/:id',singlecomment);
router.get('/delete/:id',deletcomment);
router.post('/updatecomment/:id',updatecomment);
router.get('/limitskip',limitskipcomment);
router.get('/getpost/:id',userIdcomment);




module.exports = router;