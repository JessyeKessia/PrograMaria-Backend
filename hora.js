// importanto o express para o programa
const express = require("express");
const router = express.Router();
// dando valor de aplicativo e criando o processo da api
const app = express();
const porta = 3333

app.get('/hora', (request, response) => {
    const data = new Date();
    const hora = data.toLocaleTimeString('pt-BR');
    response.send(hora);
})

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
}
app.listen(porta, mostraPorta)