module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix === undefined || matrix.length === 0) {
        return result; 
    } else {
        let rowCount = 1;
        for (let key1 in matrix) {
            if (rowCount % 2) {
                for (let key2 in matrix[key1]) {
                    result.push(matrix[key1][key2]);
                };
            } else {
                for (let key2 in matrix[key1].reverse()) {
                    result.push(matrix[key1][key2]);
                };
            }
            rowCount++;
        }
        return result; 
    }
}
