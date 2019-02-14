const express = require('express')
const router = express.Router()

//Controllers Import
const basicController = require('./controllers/basicController')
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
const commentController = require('./controllers/commentController')

//Basic Routes
router.get('/', basicController.get)

//User Routes
router.post('/signup', userController.post)

//Post Routes
router.post('/post', postController.post)
router.get('/posts', postController.getAll)

//Comment Routes
router.post('/comment', commentController.post)

module.exports = router