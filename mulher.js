// importanto o express para o programa
const express = require("express");
const router = express.Router();

// dando valor de aplicativo e criando o processo da api
const app = express();
const porta = 3333;

function mostraMulher(request, response) {
    response.json( {
        nome: 'Simara Conceição',
        imagem: 'https://gthub.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    });
};

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
};

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)