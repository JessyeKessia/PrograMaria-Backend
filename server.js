// importanto o express para o programa
const express = require("express");
// dando valor de aplicativo e criando o processo da api
const app = express();

const porta = 3333

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
}
app.listen(porta, mostraPorta)