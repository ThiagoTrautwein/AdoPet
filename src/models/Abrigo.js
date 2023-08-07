import mongoose from 'mongoose';
const abrigoSchema = new mongoose.Schema(
    {
        id: { type: String },
        cidade: { type: String, required: true },
        estado: { type: String, required: true },
    }
);

const abrigos = mongoose.model('abrigos', abrigoSchema);

export default abrigos;