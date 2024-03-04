// importanto o express para o programa
const express = require("express");
const router = express.Router()
// dando valor de aplicativo e criando o processo da api
const app = express();
const porta = 3333

app.get('/mulheres', (request, response) => {
    const mulheres = [
    {
        nome: 'Simaria conceição',
        imagem: 'https://gitHub.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutura'
    },
    {
        nome: 'jessye Kessia de Carvalho Pereira',
        imagem: 'https://gitHub.com/jessyekessia.png',
        minibio: 'Estudante de TSI'
    },
    {
        nome: 'Nina da Hora',
        imagem: '',
        minibio: 'Hacker antirracista'
    }
    ]
    response.json(mulheres);
});

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta);
}
app.listen(porta, mostraPorta)