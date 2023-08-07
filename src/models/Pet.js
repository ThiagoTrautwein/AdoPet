import mongoose from 'mongoose';
const petSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        idade: { type: String, required: true },
        tamanho: { type: String, required: true },
        caracteristica: { type: String },
        adotado: { type: Boolean, required: true },
        imagem: { type: String },
        dono: {type: mongoose.Schema.Types.ObjectId, ref: 'usuarios'},
        abrigo: {type: mongoose.Schema.Types.ObjectId, ref: 'abrigos', required:true},
    }
);

const pets = mongoose.model('pets', petSchema);

export default pets;