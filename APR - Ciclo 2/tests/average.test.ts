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

// Teste 5: Lança erro para notas fora do intervalo válido
test('Lança erro para notas fora do intervalo válido', () => {
  expect(() => calculateAverage(11, 8, 9)).toThrow('Nota inválida');
});
