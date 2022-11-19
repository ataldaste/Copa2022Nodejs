const { Router } = require('express')
const jogos = require('../dataBase/models/jogos')
const jogosController = require('../controllers/jogos')

const jogosRouter = Router() 

jogosRouter.post("/create", jogosController.store)
jogosRouter.get("/", jogosController.index)
jogosRouter.get("/grupo", jogosController.grupo)
jogosRouter.get("/jogos", jogosController.timeAdv)
jogosRouter.get("/data", jogosController.data)


module.exports = jogosRouter