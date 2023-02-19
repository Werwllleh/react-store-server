const Router = require('express') // Достаем router из express
const router = new Router() // Создаем объект роутера
const brandController = require('../controllers/brandController')


router.post('/', brandController.create)
router.get('/', brandController.getAll)


module.exports = router