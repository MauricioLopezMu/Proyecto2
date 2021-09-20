const { Router } = require('express');
const router = Router();
const { getRes } = require('../controllers/data');

router.route('/')
    .get(getRes)


module.exports = router;