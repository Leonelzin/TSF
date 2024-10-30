# Algoritmo para Calcular a Média de Três Notas usando TDD 📊

## Objetivo 🎯
Neste projeto, você aplicará o Test-Driven Development (TDD) para desenvolver um algoritmo que calcule a média de três notas. O processo envolve escrever testes, implementar o algoritmo e refatorar o código.

## Pré-requisitos ⚙️

### 1. Crie um novo projeto Node.js:
```bash
mkdir APR - Ciclo 2 && cd APR - Ciclo 2
npm init -y
````

### 2. Instale o Jest e suas dependências:
```bash
npm install jest @types/jest ts-jest --save-dev
````
### 3. Inicialize a configuração do Jest:
```bash
npx ts-jest config:init
````
### 4. Crie a estrutura do seu projeto:
```bash
mkdir src __tests__
touch src/averagetest.ts
```

### Fase 1: Escrevendo os Testes (Fase Red) 🔴
Instruções:
No arquivo ../tests/averagetest.ts, adicione os seguintes testes:
```bash
//Aluno: Douglas Leonel de Almeida - 2110213

import { calculateAverage } from '../src/average';

// Teste 1: Verifica se a média de 3 notas é calculada corretamente
test('Calcula a média corretamente para três notas inteiras', () => {
  expect(calculateAverage(5, 7, 9)).toBe(7);
});

// Teste 2: Todas as notas são zero
test('Retorna 0 quando todas as notas são zero', () => {
  expect(calculateAverage(0, 0, 0)).toBe(0);
});

// Teste 3: Notas máximas possíveis
test('Calcula a média corretamente para notas máximas', () => {
  expect(calculateAverage(10, 10, 10)).toBe(10);
});

// Teste 4: Notas com valores decimais
test('Calcula a média corretamente para notas com decimais', () => {
  expect(calculateAverage(7.5, 8.2, 9.1)).toBeCloseTo(8.27, 2);
});
```
No arquivo ../src/average.ts, adicione o seguinte teste:
```bash
// Aluno: Douglas Leonel de Almeida - 2110213

export function calculateAverage(n1: number, n2: number, n3: number): number {
    // Alterando a lógica da média para garantir que os testes falhem
    return (n1 + n2 + n3) / 2; // Dividir por 2 ao invés de 3
}
```
Execute os testes para garantir que eles falham inicialmente:
```bash
npm test
```
