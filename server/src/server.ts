// Importando uma dependência
// Express
// Essa é a maneira "comum"
// const express = require('express')

// Importando com ECMAScript Module
import express from 'express'

const app = express()

// HTTP methods / API RESTful / HTTP CODE
// GET, POST, PUT, PATCH, DELETE

// ROTAS DA APLICAÇÃO
// É usualmente usado no plural o recurso na url (games, ads)
// É possível se ter mesmo nome de rotas mas com métodos http diferentes

// listando os games
app.get('/games', (request, response) => {
    return response.json([]) // retornando vazio apenas para não dar erro
})

// publicando(criando) um novo anúncio
app.post('/ads', (request, response) => {
    return response.status(201).json([]) // retornando vazio apenas para não dar erro
})

// Listagem de anúncios POR game
// utilizando route params para acessar o anuncio POR game
app.get('/games/:id/ads', (request, response) => {
    // const gameId = request.params.id

    // request e response são padrões do express
    // request faz a busca de informações por requisições na rota
    // response devolve uma resposta

    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' },
        { id: 3, name: 'Anúncio 3' },
        { id: 4, name: 'Anúncio 4' },
        { id: 5, name: 'Anúncio 5' },
    ])
})


// Buscar discord pelo ID do anúncio

app.get('/ads/:id/discord', (request, response) => {
    // const adId = request.params.id

    return response.json([])
})

app.listen(3333)