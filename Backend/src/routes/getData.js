const { Router } = require('express');
const router = Router();
const { getRes } = require('../controllers/data2');

router.route('/')
    .get(getRes)


module.exports = router;