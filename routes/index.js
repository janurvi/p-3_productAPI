var express = require('express');
const { enterData, userLogin, allUsers, singleData, searchuser, limitskiuser, deletuser, updateuser, todouser, userIdcart, userposts} = require('../controller/userControl');
const { userAuth } = require('../middleware/auth');
var router = express.Router();

/* GET home page. */
router.post('/register', enterData);
router.get('/',userLogin);
router.get('/users',userAuth, allUsers);
router.get('/users/:id',singleData);
router.get('/search',searchuser);
router.get('/limitskip',limitskiuser);
router.get('/delet/:id', deletuser);
router.get('/update/:id', updateuser);
router.get('/users/:id/todos',todouser);
router.get('/getcart/:id', userIdcart);
router.get('/getpost/:id', userposts);


module.exports = router;
