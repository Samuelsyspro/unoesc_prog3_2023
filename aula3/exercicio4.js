const populacaoA = 80000;
const taxaCrescimentoA = 0.03;
const populacaoB = 200000;
const taxaCrescimentoB = 0.022;

const anos = Math.ceil(Math.log(populacaoB / populacaoA) / Math.log(1 + (taxaCrescimentoA / taxaCrescimentoB)));

console.log(`Serão necessários ${anos} anos para a população de A ultrapassar ou igualar a população de B.`);
