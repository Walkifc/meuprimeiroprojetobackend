const express = require("express")
const router = express.Router ()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simaria da Conceição',
        imagem: 'https://www.linkedin.com/in/simaraconceicao/overlay/photo/',
        minibio:'Desenvolvedora e Instrutora'

    },
    {
        nome: 'Iana Chan',
        imagem: 'https://www.linkedin.com/in/ianachan/overlay/photo/ ',
        minibio:'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://www.linkedin.com/in/ninadahora/ ',
        minibio: 'Hacker antirracista'

    }
]

function mostraMulheres (request, response) {
    response.json (mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
 }
app.use (router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)