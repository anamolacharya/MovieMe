const express = require('express');
const router = express.Router();

const { signup, signin, favorite, unfavorite } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/moviepage/:movieID/favorite', favorite);
router.post('/unfavorite', unfavorite);

module.exports = router;