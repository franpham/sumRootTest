
function sumRoot(n) {
  n += 1;
  var list = new Array(n);
  for (var i = 0; i < n; i++) {
    list[i] = i;
  }
  return list.map(function(num) {
    return Math.sqrt(num);
  }).reduce(function(prev, curr) {
    return prev + curr;
  });
}

// uncomment to test in node;
// var Tester = {sumRoot : sumRoot};
// module.exports = Tester;