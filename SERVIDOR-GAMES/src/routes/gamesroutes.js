const express = require('express')
const router = express.Router()
const controller = require('../controller/gamescontroller')
const cors = require('cors')


//@router put games
//@params :id
//@desc put atualiza um recurso, necessario enviar todos os atributos preenchidos para a atualizacao 
//@access public
router.put("/games/:id", cors(), controller.atualizar)

//@route patch games
//@params :id
//@desc patch atualiza um recurso inserindo apenas a chave que será alterada 
//@access public
router.patch("/games/:id", cors(), controller.update)

module.exports = router