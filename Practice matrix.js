/*
    
Codifica una función que pueda rotar a 90°, 180°, 270° y 360° una matriz cuadrada de 3x3 que reciba dos parámetros; el primero es un arreglo de 3 arreglos y cada arreglo cuenta con 3 elementos numéricos, el segundo es número entero que indique los grados de rotación.

Es necesario desarrollar una función adicional para imprimir la matriz, que será necesaria para mostrar el estado inicial de la matriz y cada una de las rotaciones intermedias hasta el estado final.

Ejemplo
Rotar matriz a 180
matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

grados =  180;

Ejemplo resultado deseado

"Estado inicial:"
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
"Estados intermedios:" 
[7, 4, 1]
[8, 5, 2]
[9, 6, 3]
"Resultado final:" 
[9, 8, 7]
[6, 5, 4]
[3, 2, 1]

*/

function rotateMatrix(matrix, rotation) {
    let newMatrix = [];
    for (let step = 1; step <= rotation; step++) {
        newMatrix = [];
        for (let row = 0; row < matrix.length; row++) {
            if (!newMatrix[row]) {
                newMatrix[row] = [];
            }
            for (let col = 0; col < matrix.length; col++) {
                newMatrix[row][col] = matrix[matrix.length - (col + 1)][row];
            }    
        }
        matrix = newMatrix;
        if (step < rotation) {
            console.log('====================================');
            console.log(`intermediate step: #${step}`);
            console.log(matrix[0]);
            console.log(matrix[1]);
            console.log(matrix[2]);
            console.log('====================================');
        }
    }
    return matrix;
}

function rotate(matrix, rotation) {
    let result = 'Matrix is invalid.';
    if (isNaN(rotation) || (rotation && rotation % 90 !== 0))  {
        return 'The rotation value is invalid.';
    }
    if (Array.isArray(matrix) && matrix.length === 3) {
        const isSquare = matrix.map(row => Array.isArray(row) && row.length === 3).every(item => item === true);
        if (isSquare) {
            result = rotateMatrix(matrix, rotation / 90);
            result = `Final matrix: 
                        [${result[0]}]
                        [${result[1]}]
                        [${result[2]}]
                     `;
        }
    }
    return result;
}

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 180));