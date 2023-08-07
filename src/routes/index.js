import express from 'express';
import usuarios from './usuariosRoutes.js';
import pets from './petsRoutes.js';
import abrigos from './abrigosRoutes.js';
import adocao from './adoçãoRoutes.js';
import app from '../app.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "AdoPet"});
    });

    app.use(
        express.json(),
        usuarios,
        pets,
        abrigos,
        adocao
    );
}

export default routes;