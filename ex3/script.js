// [M1S03] Ex 3 - Crie função para cadastrar Veículo.
// Crie uma lista no escopo global para armazenar os veiculos que serão cadastrados
//Chame a função para cadastrar o Veículo.
//Como parâmetro receba o nome do modelo, nome da marca e o nome do veículo, 
//km, valor e cor.
//A cada cadastro imprima uma mensagem "Veículo cadastrado com sucesso!"
//Após a chamada imprima os veículos cadastrados
//-----------------------------------------------------------------


var veiculoCar = ['Volkswagen', 'Gol', 'veiculo1', 50000, 35000, 'vermelha'];

/* function cadastraVeiculo (modelo, marca, veiculo, km, valor, cor) {
    veiculoCar.push(modelo.value, marca.value, veiculo.value, km.value, valor.value, cor.value);
    console.log(`Veículo cadastrado com sucesso!`)
}
 */
function cadastraVeiculo (modelo, marca, veiculo, km, valor, cor) {
    veiculoCar.push({modelo, marca, veiculo, km, valor, cor});
    console.log(`Veículo cadastrado com sucesso!`)
}

console.log(veiculoCar);
//cadastraVeiculo('volkswagen', 'Gol', 'veiculo1', '50000', '35.000', 'vermelha');

var array = ['Volkswagen', 'Gol', 'veiculo1', 50000, 35000, 'vermelha'];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);

}
