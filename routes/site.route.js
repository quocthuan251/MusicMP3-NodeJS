const express = require('express')
const router = express.Router();
const siteController = require('../controllers/site.controller')


router.get('/', async (req, res) => {
    const users = await User.find({});
    let username = []
    users.map((user) => {
        return username.push(user.fullname)
    })
    res.json(username)
})


module.exports = router;