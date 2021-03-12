const router = require('express').Router()
const userController = require('../controllers/userController')
const multer = require('../config/multer')
router.get('/users', userController.list)
router.post('/users', userController.create)
router.post('/users/:id/uploads', multer.single('file'), userController.upload)
module.exports = router