let saque = Number(prompt('Digite o valor desejado: '));
let notasSacadas50 = 0;
let notasSacadas10 = 0;
let notasSacadas5 = 0;
let notasSacadas1 = 0;

while (saque >= 50) {
    saque = saque - 50;
    notasSacadas50++;
}

while (saque >= 10) {
    saque = saque - 10;
    notasSacadas10++;
}

while (saque >= 5) {
    saque = saque - 5;
    notasSacadas5++;
}

while (saque >= 1) {
    saque = saque - 1;
    notasSacadas1++;
}

console.log(`Notas de 50 sacadas: ${notasSacadas50}`);
console.log(`Notas de 10 sacadas: ${notasSacadas10}`);
console.log (`Notas de 5 sacadas: ${notasSacadas5}`);
console.log (`Notas de 1 sacadas: ${notasSacadas1}`);