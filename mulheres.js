// importanto o express para o programa
import express from 'express';
// importando o esquema criado para pegar no BD
import { diva } from './mulherModel.js';
// importanto o pacote cors
import cors from 'cors';

// ligado o arquivo ao banco de dados e chamando a função
import { conectBancoDeDados } from './bancoDeDados.js';
conectBancoDeDados() // chamando a função
const router = express.Router(); //Configurando a rota
const app = express(); // dando valor de aplicativo e criando o processo da api
app.use(express.json()); // requisição sendo mandada em json agora
app.use(cors) // requisição do cors
// porta do projeto
const porta = process.env.PORT || 3333;

// Get - pegar a lista e mostra na tela
app.get('/mulheres', async (request, response) => {
    try {
        const mulheresVindasdoBanco = await diva.find()
        response.json(mulheresVindasdoBanco)
    } catch(error) {
        console.log(error)
    }
});

// Post - submissão de novas mulheres
app.post('/mulheres', async (request, response) => {
      const novaMulher = new diva ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,
    })
    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (error) {
        console.log(error)
    }
});

// Patch - correção pegando o id
app.patch('/mulheres/:id', async (request, response) => {
    try{
        const mulherEncontrada = await diva.findById(request.params.id)
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome;
        }
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem;
        }
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio;
        }
        if (request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao;
        }
        const MulherAtualizadaNoBanco = await mulherEncontrada.save()
        response.json(MulherAtualizadaNoBanco);
    } catch(e) {
        console.log(e)
    }
});

// Delete - excluir pegando o id
app.delete('/mulheres/:id', async (request, response) => {
    try {
        await diva.findByIdAndDelete(request.params.id)
        response.json({message: 'Mulher deletada com sucesso'})
    } catch (e) {
        console.log(e)
    }
});

// Porta
app.listen(porta, () => {
    console.log('Servidor criado e rodando na porta', porta)
})