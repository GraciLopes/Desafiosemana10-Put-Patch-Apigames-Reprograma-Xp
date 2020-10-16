//const { response } = require('../app')
const { request, response } = require('express')
const games = require('../model/games.json')

const atualizar = (request, response) => {
    const gamesAtualizado = request.body
    const id = parseInt(request.params.id)

    const gamesId = games.map(games => games.id)
        //map retorna um novo array
    const atualizaId = gamesId.indexOf(id)

    const gamesAtualizadocomId = { id, ...gamesAtualizado }
        //usando spread para retornar todo o array
    games.splice(atualizaId, 1, gamesAtualizadocomId)

    response.status(200).send(games.find(games => games.id === id))
    console.log(games)
}

const update = (request, response) => {
    const gamesAtualizacao = request.body
    const id = parseInt(request.params.id)
    const gamesParaAtualizar = games.find(games => games.id == id)

    Object.keys(gamesAtualizacao).forEach((key) => {
        gamesParaAtualizar[key] = gamesAtualizacao[key]
    })
    response.status(200).send(games)
}

module.exports = {
    atualizar,
    update
}