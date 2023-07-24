let a = [1, 2, 3, [3, 45]];
let result = a.reduce((a, b) => {
  return a.concat(b);
}, []);
console.log(result);
