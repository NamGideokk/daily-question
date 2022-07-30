// 자릿수 더하기 (프로그래머스)

function solution(n) {
  return String(n)
    .split("")
    .reduce((prev, curr) => {
      prev += parseInt(curr);

      return prev;
    }, 0);
}

console.log(solution(123));
console.log(solution(987));
