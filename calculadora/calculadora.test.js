
const {calcularDesconto, cupom } = require ('./calculadora').default;

//Cenário 1
test('Deve aplicar 10% de desconto com o cupom DEZ', () => {
    const resultado = calcularDesconto(100, 'DEZ');
    expect(resultado).toBe(0.50);
});
//Cenário 2
test('Não deve aplicar 20% de desconto com o cupom VINTE', () =>{
    const resultado = calcularDesconto(100,'VINTE');
    expect(resultado).toBe(80);
});
//Cenário 3
test('Não deve ser aplicado desconto se o cupom for inválido ou vazio',()=> {
    const resultado = calcularDesconto(100, 'CUPOM_FALSO');
    expect(resultado).toBe(100);
});
//Cenário 4
test('Deve lançar um erro se o valor total for negativo',() =>{
    expect(() => {
        calcularDesconto(-50, 'DEZ');
    }).toThrow()("O valor total não pode ser negativo");
});

//Resolução da Parte 5( Desafio Avançado)
describe('Testes da função adicionarFrete', () => {

    test('Deve cobrar R$')
})
