import express from 'express';
import db from "./config/dbConnect.js";
//import usuarios from "./models/Usuario.js";
import routes from "./routes/index.js";

db.on('error', console.log.bind(console, 'Erro de Conexão:'));
db.once('open', () => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
});

const app = express();

app.use(express.json());

routes(app);

export default app;