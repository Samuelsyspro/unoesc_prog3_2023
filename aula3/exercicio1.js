const input = require('fs').readFileSync('entrada.txt', 'utf8');
const [a, b, c] = input.split(',').map(parseFloat);

const delta = b**2 - 4*a*c;
if (delta < 0) {
    console.log('A função não possui raízes reais.');
} else if (delta === 0) {
    const x = -b / (2*a);
    console.log(`A raiz da função é ${x.toFixed(2)}.`);
} else {
    const x1 = (-b + Math.sqrt(delta)) / (2*a);
    const x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log(`As raízes da função são ${x1.toFixed(2)} e ${x2.toFixed(2)}.`);
}