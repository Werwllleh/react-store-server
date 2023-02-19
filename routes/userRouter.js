const Router = require('express') // Достаем router из express
const router = new Router() // Создаем объект роутера
const userController = require('../controllers/userController')

const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)



module.exports = router