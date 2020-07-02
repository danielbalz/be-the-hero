const express = require('express'); // Importando um pacote
const cors = require('cors');
const routes = require('./routes'); // Importando um arquivo, por isso se passa o caminho relativo

const app = express();

app.use(cors());
app.use(express.json()); // Avisa a aplicação que os dados enviados na requisição pelo body são em formato json
app.use(routes);

app.listen(3333);