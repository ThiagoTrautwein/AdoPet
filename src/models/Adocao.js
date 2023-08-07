import mongoose from 'mongoose';
const adocaoSchema = new mongoose.Schema(
    {
        id: { type: String },
        animal: {type: mongoose.Schema.Types.ObjectId, ref: 'pets', required:true},
        tutor: {type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required:true},
        data: { type: String, required: true },
    }
);

const adocao = mongoose.model('adocao', adocaoSchema);

export default adocao;