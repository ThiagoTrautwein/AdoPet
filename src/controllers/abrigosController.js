import abrigos from '../models/Abrigo.js';

class AbrigoController {
    static listarAbrigos = (req,res) => {
        abrigos.find({}, (err, abrigos) => {
            if (err) {
                res.status(400).send({message:`Falha ao Encontrar Todos os Abrigos: ${err.message}`});
            }
            else {  
                res.status(200).json(abrigos);
            }

        });
    }

    static listarAbrigoPorId = (req,res) => {
        const id = req.params.id;
        abrigos.findById(id, (err, abrigo) => {
            if (err) {
                res.status(400).send({message:`Falha ao Encontrar Abrigo por ID: ${err.message}`});
            }
            else {
                res.status(200).send(abrigo);
            }
        });  
    }

    static cadastrarAbrigo = (req,res) => {
        let abrigo = new abrigos(req.body);
        abrigo.save((err) =>{
            if (err) {
                res.status(500).send({message:`Falha ao cadastrar Abrigo: ${err.message}`});
            }
            else {
                res.status(200).send(abrigo.toJSON());
            }
        });
    }

    static atualizarAbrigo = (req,res) => {
        const id = req.params.id;
        abrigos.findByIdAndUpdate(id, {$set: req.body}, {new:true}, (err, abrigo) => {
            if (!err) {
                res.status(200).send(abrigo.toJSON());
            }
            else {
                res.status(500).send({message: `Falha ao atualizar abrigo: ${err.message}`});
            }
        });
    }

    static deletarAbrigo = (req,res) => {
        const id = req.params.id;
        abrigos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Abrigo deletado com sucesso!`});
            }
            else {
                res.status(500).send({message: `Falha ao deletar abrigo: ${err.message}`});
            }
        });
    }

    static listarAbrigosPorCidade = (req,res) => {
        const cidade = req.query.cidade;
        abrigos.find({'cidade': cidade},{},(err, abrigos) => {
            res.status(200).send(abrigos);
        });
    }

    static listarAbrigosPorEstado = (req,res) => {
        const estado = req.query.estado;
        abrigos.find({'estado': estado},{},(err, abrigos) => {
            res.status(200).send(abrigos);
        });
    }
}

export default AbrigoController;