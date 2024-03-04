// importanto o express para o programa
const express = require("express");
const router = express.Router();
// dando valor de aplicativo e criando o processo da api
const app = express();
const porta = 3333;

function mostraOla(request, response) {
    response.send('Ola, mundo!')
};

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
};

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)