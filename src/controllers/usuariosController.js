import usuarios from '../models/Usuario.js';

class UsuarioController {
    static listarUsuarios = (req,res) => {
        usuarios.find({}, (err, usuarios) => {
            if (err) {
                res.status(400).send({message:`Falha ao Encontrar Todos os Usuários: ${err.message}`});
            }
            else {  
                res.status(200).json(usuarios);
            }

        });
    }

    static listarUsuarioPorId = (req,res) => {
        const id = req.params.id;
        usuarios.findById(id, (err, usuario) => {
            if (err) {
                res.status(400).send({message:`Falha ao Encontrar Usuário por ID: ${err.message}`});
            }
            else {
                res.status(200).send(usuario);
            }
        });  
    }

    static cadastrarUsuario = (req,res) => {
        let usuario = new usuarios(req.body);
        usuario.save((err) =>{
            if (err) {
                res.status(500).send({message:`Falha ao cadastrar Usuário: ${err.message}`});
            }
            else {
                res.status(200).send(usuario.toJSON());
            }
        });
    }

    static atualizarUsuario = (req,res) => {
        const id = req.params.id;
        usuarios.findByIdAndUpdate(id, {$set: req.body}, {new:true}, (err, usuario) => {
            if (!err) {
                res.status(200).send(usuario.toJSON());
            }
            else {
                res.status(500).send({message: `Falha ao atualizar usuário: ${err.message}`});
            }
        });
    }

    static deletarUsuario = (req,res) => {
        const id = req.params.id;
        usuarios.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Usuário deletado com sucesso!`});
            }
            else {
                res.status(500).send({message: `Falha ao deletar usuário: ${err.message}`});
            }
        });
    }

    static listarUsuariosPorCidade = (req,res) => {
        const cidade = req.query.cidade;
        usuarios.find({'cidade': cidade},{},(err, usuarios) => {
            res.status(200).send(usuarios);
        });
    }
}

export default UsuarioController;