const Router = require('express') // Достаем router из express
const router = new Router() // Создаем объект роутера
const deviceController = require('../controllers/deviceController')


router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)



module.exports = router