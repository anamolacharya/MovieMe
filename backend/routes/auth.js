const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/signin', signin);
//router.post('/favorite', favorite);
//router.post('/unfavorite', unfavorite);

module.exports = router;