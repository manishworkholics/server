const express = require('express')
const { register, showuser, updateuser, deleteuser, login } = require('../Controller/usercontroller')
const router = express.Router()
const auth = require("../Middleware/auth")

router.route('/registration').post(register)
router.route('/login').post(login)
router.route('/show-result').get( auth, showuser)
router.route('/update-result/:id').put( updateuser)
router.route('/delete-user/:id').delete(deleteuser)



module.exports = router