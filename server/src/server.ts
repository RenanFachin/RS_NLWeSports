// Importando uma dependência
// Express
// Essa é a maneira "comum"
// const express = require('express')

// Importando com ECMAScript Module
import express from 'express'

// Importando o prismaClient
import { PrismaClient } from '@prisma/client'

// Fazendo o import da função auxiliar de conversão de horas
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

const app = express()

// Fazendo o express entender que é possível receber um dado em formato JSON
app.use(express.json())

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
// Sempre que for criar um ad ('/games/:id/ads'), ele precisa receber o id do game  
app.post('/games/:id/ads', async (request, response) => {
    // Pegando o game id diretamente da routeparams pelo request.params.id
    const gameId = request.params.id;

    // acessando o body da requisição
    const body = request.body;

    // pegando os dados passados pelo request e pelo body e criando um anúncio
    const ad = await prisma.ad.create({
        data:{
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            // weekdays é passado como array e aqui será passado separado por virgula (join(','))
            weekDays: body.weekDays.join(','),
            // Passando o que vier no body hourStart e hourEnd como parâmetro da função que converte tudo para minutos
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    })


    return response.status(201).json(ad) // retornando vazio apenas para não dar erro
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
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }))
})


// Buscar discord pelo ID do anúncio
app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id

    //findUniqueOrThrow tenta encontrar um ad com o id ou dispara um erro
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where:{
            id: adId,
        }
    })

    return response.json({
        discord: ad.discord,
    })
})

app.listen(3333)