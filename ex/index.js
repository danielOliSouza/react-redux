const produto = {
    nome: "Caneta",
    preco: 1.90,
    desconto: 1
};

function clone(obj){
    return {... obj}; // "..." é um operador 'Spread' ele clona o obj. Tbm não é reconhecido pelo Browser, e tbm nao pelo babel
                      // Por isso usamos um plugin do babel 'transform-object-rest-spread'
}

const novoProduto = clone(produto);

novoProduto.nome = 'Caneta Bic Azul';

console.log(produto, novoProduto);