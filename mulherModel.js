import mongoose from "mongoose";

export const diva = mongoose.model('diva', {
    nome: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    minibio: {
        type: String,
        required: true,
    },
    citacao: {
        type: String,
        required: true,
    }
});
