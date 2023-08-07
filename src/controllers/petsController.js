import pets from '../models/Pet.js';

class PetController {
    static listarPets = (req,res) => {
        pets.find()
            .populate('dono')
            .populate('abrigo')
            .exec((err, pets)=> {
                res.status(200).json(pets);
            });
    }

    static listarPetPorId = (req,res) => {
        const id = req.params.id;
        pets.findById(id)
            .populate('dono')
            .populate('abrigo')
            .exec((err, pets) => {
                if (err) {
                    res.status(400).send({message: `ID do pet não encontrado: ${err.message}`});
                }
                else {
                    res.status(200).send(pets);
                }
            });
    }

    static cadastrarPet = (req,res) => {
        let pet = new pets(req.body);
        pet.save((err) =>{
            if (err) {
                res.status(500).send({message:`Falha ao cadastrar pet: ${err.message}`});
            }
            else {
                res.status(201).send(pet.toJSON());
            }
        });
    }

    static atualizarPet = (req,res) => {
        const id = req.params.id;
        pets.findByIdAndUpdate(id, {$set: req.body}, {new:true}, (err, pet) => {
            if (!err) {
                res.status(200).send(pet.toJSON());
            }
            else {
                res.status(500).send({message: `Falha ao atualizar usuário: ${err.message}`});
            }
        });
    }

    static deletarPet = (req,res) => {
        const id = req.params.id;
        pets.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Pet deletado com sucesso!`});
            }
            else {
                res.status(500).send({message: `Falha ao deletar pet: ${err.message}`});
            }
        });
    }

    static listarPetsPorCidade = (req,res) => {
        const cidade = req.query.cidade;
        pets.find({'cidade': cidade},{},(err, pets) => {
            res.status(200).send(pets);
        });
    }
}

export default PetController;