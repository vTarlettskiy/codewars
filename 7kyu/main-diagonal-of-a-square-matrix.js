// DESCRIPTION:
//     Given a list of rows of a square matrix, find the product of the main diagonal.
//
//     Examples:
//
// [[1, 0], [0, 1]] should return 1
//     [[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45

function mainDiagonalProduct(mat){
    let num = 1;
    for (i = 0, j = 0; i < mat.length; i++, j++) {
        num *= mat[i][j];
    }
    return num;
}