const express = require('express');
const app = express();

app.use(express.json());

app.post('/dados', (req, res) => {
  const inputs = req.body;
  res.json({ inputs });
});

app.get('/metaverso', (req, res) => {
  const metaversoItens = [
    { nome: 'Item 1', descricao: 'Descrição do Item 1' },
    { nome: 'Item 2', descricao: 'Descrição do Item 2' }
  ];
  res.json(metaversoItens);
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
