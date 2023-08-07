import adocao from '../models/Adocao.js';
import pets from '../models/Pet.js';

class AdocaoController {
    static listarAdocoes = (req,res) => {
        adocao.find()
            .populate('animal')
            .populate('tutor')
            .exec((err, adocoes)=> {
                res.status(200).json(adocoes);
            });
    }

    static verificaAdocao = function (id) {
        let aux = false;
        pets.findById(id, (err, pet) => {
            aux = pet.adotado
        })

        return aux;

    }

    static cadastrarAdocao = (req,res) => {
        const id = req.body.animal;

        let adocaoo = new adocao(req.body);

        adocaoo.save((err) =>{
            if (err) {
                res.status(500).send({message:`Falha ao cadastrar Adoção: ${err.message}`});
            }
            else {
                pets.findByIdAndUpdate(id, {"adotado":true}, {new:true}, (err, pet) => {
                    res.status(200).send(adocaoo.toJSON());
                });
            }
        });
        
    }

    static deletarAdocao = (req,res) => { // aqui tbm deve estar dando erro de async await.
        const id = req.params.id;
        
        adocao.findByIdAndDelete(id, (err, adocaoo) => {
            if (!err) { 
                let id = adocaoo.animal;
                pets.findByIdAndUpdate(id, {"adotado":false}, {new:true}, (err, pet) => {
                    console.log("Pet atualizado: " + pet);
                });
                res.status(200).send({message: `Adoção deletada com sucesso!`});
            }
            else {
                res.status(500).send({message: `Falha ao deletar adoção: ${err.message}`});
            }
        });
    }
}

export default AdocaoController;