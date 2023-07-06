var express = require('express');
const { enterposts, singlepost, allposts, deletposts, updateposts, searchposts, limitskippost, userIdpost, usercomment } = require('../controller/postControl');
var router = express.Router();

router.post('/register', enterposts);
router.get('/singlepost/:id', singlepost);
router.get('/allposts', allposts);
router.get('/delet/:id', deletposts);
router.get('/update/:id', updateposts);
router.get('/search',searchposts);
router.get('/limitskip',limitskippost);
router.get('/getuser/:id', userIdpost);
router.get('/getcomment/:id', usercomment);



module.exports = router;