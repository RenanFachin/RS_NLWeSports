// Importando uma dependência
// Express
// Essa é a maneira "comum"
// const express = require('express')

// Importando com ECMAScript Module
import express from 'express'

const app = express()

app.get('/ads', () => {
    console.log('Acessou Ads!')
})

app.listen(3333)