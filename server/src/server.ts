// Importando uma dependência
// Express
// Essa é a maneira "comum"
// const express = require('express')

// Importando com ECMAScript Module
import express from 'express'

// Importando o prismaClient
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient({
    log: ['query']
}) // Faz a conexão com o banco de forma automática

// HTTP methods / API RESTful / HTTP CODE
// GET, POST, PUT, PATCH, DELETE

// ROTAS DA APLICAÇÃO
// É usualmente usado no plural o recurso na url (games, ads)
// É possível se ter mesmo nome de rotas mas com métodos http diferentes

// listando os games
app.get('/games', async (request, response) => {
    // O método findMany "demora" para retornar com os dados do banco de dados
    // Por este motivo, é necessário o async/await
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })


    return response.json(games) // retornando vazio apenas para não dar erro
})

// publicando(criando) um novo anúncio
app.post('/ads', (request, response) => {
    return response.status(201).json([]) // retornando vazio apenas para não dar erro
})

// Listagem de anúncios POR game
// utilizando route params para acessar o anuncio POR game
app.get('/games/:id/ads', async(request, response) => {
    const gameId = request.params.id

    const ads = await prisma.ad.findMany({
        // Dizendo quais são os campos que vão aparecer (retirado o campo discord)
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        // Fazendo a busca
        where:{
            gameId: gameId
        },
        // Listando os dados no db apartir dos anúncios mais recentes
        orderBy: {
            createAt: 'desc',
        }
    })

    // request e response são padrões do express
    // request faz a busca de informações por requisições na rota
    // response devolve uma resposta

    // Percorrendo os ads e para cada dado dentro de ads = terá uma formatação
    return response.json(ads.map(ad => {
        return{
            // spread operator em todo o objeto e substituindo apenas o weekdays
            ...ad,
            // Fazendo a separação do weekdays onde tem a vírgula (vai retornar um array e cada posição do array diz qual dia da semana que é)
            weekDays: ad.weekDays.split(',')
        }
    }))
})


// Buscar discord pelo ID do anúncio

app.get('/ads/:id/discord', (request, response) => {
    // const adId = request.params.id

    return response.json([])
})

app.listen(3333)