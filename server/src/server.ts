// Importando uma dependência
// Express
// Essa é a maneira "comum"
// const express = require('express')

// Importando com ECMAScript Module
import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
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

app.listen(3333)