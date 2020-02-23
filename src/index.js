
exports.min = function min (array) {
  if (array !== undefined && array.length !== 0) {
    return Math.min.apply(null, array);
} else {
    return 0;
}
}

exports.max = function max (array) {
  if (array && array.length > 0){
    return array.reduce((max, current) => max = max < current ? current : max, -Infinity);
  }
  return 0;
}


exports.avg = function avg (array) {
  let sum = 0;
    if (Array.isArray(array) && array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum / array.length;
    }
    return 0;
  }

