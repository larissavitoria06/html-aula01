function enviarPreco() {
    let dados = {
        preco: Number(document.getElementById('preco').value)
    };

    fetch('http://localhost:4000/desconto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Desconto: ${data.desconto} - Preço com desconto: ${data.precoComDesconto}`;
    })
    .catch(error => {
        console.error('Erro:', error);
    });

    app.post('/desconto', (req, res) => {
        const { preco } = req.body;
        let desconto = 0;
        if (preco >= 1000) {
            desconto = preco * 0.08;
        }
        let precoFinal = preco - desconto;
        res.json({ desconto, precoFinal, originalPrice: preco });
    });
}
