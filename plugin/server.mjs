// Importando o express
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Criando uma instância do app Express
const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
// Servindo arquivos estáticos da pasta 'plugin'
app.use('/plugin', express.static(path.join(__dirname, 'dist')));

// Forçando o MIME Type correto para arquivos JS
app.get('/plugin/:file', (req, res) => {
    const filePath = path.join(__dirname, 'dist', req.params.file);
    console.log(filePath);
    res.type('application/javascript');
    res.sendFile(filePath);
});

app.post('/collect', (req, res) => {
  const data = req.body;
  console.log(data);


  // res.status(400).json({ error: true, message: 'Token inválido' });
  // res.status(400).json({ error: true, message: 'Limite excedido' });
  res.status(200).json({ message: 'Dados coletados com sucesso!' });
});

// Inicia o servidor Express na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});