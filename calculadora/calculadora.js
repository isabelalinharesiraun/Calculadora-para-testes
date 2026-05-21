function calcularDesconto(valorTotal, cupom) {
    if (valorTotal < 0) {
    throw new Error("O valor total não pode ser negativo");
    }
    if (cupom === "DEZ") {
    return valorTotal * 0.90; // 10% de desconto
    }
    if (cupom === "VINTE") {
    return valorTotal * 0.80; // 20% de desconto
    }
    return valorTotal; // Sem desconto
    }
    module.exports = { calcularDesconto, adicionarFrete }; //desafio adicionarFrete

    /*DESAFIO
    function adicionarfrete(valortotal, estado) {
    if (estado === "SP") {
    return valorTotal + 10;
    }
    return valorTotal + 20;
    }
    */

    