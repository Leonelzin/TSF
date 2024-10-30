//Aluno: Douglas Leonel de Almeida - 2110213

export function calculateAverage(n1: number, n2: number, n3: number): number {
    const validateNote = (note: number) => {
      if (note < 0 || note > 10) throw new Error('Nota inválida');
    };
  
    [n1, n2, n3].forEach(validateNote);
    return (n1 + n2 + n3) / 3;
  }
  