
exports.min = function min (array) {
    if (!array || array.length < 1 ) return 0;
    return (array.sort((a, b) => b - a))[array.length-1];
}

exports.max = function max (array) {
    if (!array || array.length < 1 ) return 0;
    return (array.sort((a, b) => a - b))[array.length-1];
}

exports.avg = function avg (array) {
    if (!array || array.length < 1 ) return 0;
    return avg = (array.reduce((a, b) => a + b, 0) / array.length);
}
