const userService = require('../services/user.service.js');
const router = require('express').Router();

router.post('/register', async (req, res) => {userService.createUser(req, res)})

module.exports = router