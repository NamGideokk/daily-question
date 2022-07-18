function numberCounter(a, b, c) {
  const multiplied = a * b * c;
  const str = String(multiplied);
  const arr = str.split("");

  console.log(arr);
}

console.log(numberCounter(100, 32, 39));
