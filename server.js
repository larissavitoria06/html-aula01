const express = require('express');
const app = express();
app.use(express.json());

app.post('/ajuste_mercadoria', (req, res) => {
    const { nome, preco } = req.body;
    const novo_preco = preco * 1.1; 
    res.json({ nome, novo_preco });
});

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
