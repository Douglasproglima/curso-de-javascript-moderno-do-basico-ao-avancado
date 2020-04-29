function difDiagonal(matriz) {
    let diag1 = 0;
    let diag2 = 0;

    for(let i = 0; i < matriz.length; i++) {
        diag1 += matriz[i][i];
        diag2 += matriz[i][(matriz.length - 1) - i];
    }

    const result = diag1 - diag2;
    console.log(`${diag1} - ${diag2} = ${Math.abs(result)}`);
}

difDiagonal([
    [1, 5, 7, 1],    
    [3, 10, 3, 2,],    
    [2, 3, 5, 3],  
    [2, 3, 5, 3]  
]);

/*
Somar as diagonais e calcular a diferença entre elas
firstDiag = 1 + 10 + 5 = 16
secondDiag = 7 + 10 + 2 = 19
result = 19 - 16 = 3
*/