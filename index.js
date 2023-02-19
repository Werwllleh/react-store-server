require('dotenv').config()
const express = require('express');
const fileupload = require('express-fileupload')
const path = require('path') //Этот модуль изначально есть в nodeJS
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors()) // Для запросов с браузера
app.use(express.json()) // Для того, чтобы приложение могло парсить JSON формат
app.use(express.static(path.resolve(__dirname, 'static'))) // Раздача файлов как статика
app.use(fileupload({})) // Функция для загрузки файлов
app.use('/api', router)


app.use(errorHandler) // Обработчик ошибок, обязательно в конце

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server started on ${PORT}`))

	} catch (e) {
		console.log(e);
	}
}

start();