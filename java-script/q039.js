//3진법 뒤집기

// 자연수 n : 1 ≤ n ≥ 100,000,000

// n -> 3진법 변환 -> 뒤집기 -> 10진법 변환
function solution(n) {
  let answer = 0;
  answer = n.toString(3).split("").reverse().join("");
  return parseInt(answer, 3);
}

console.log(solution(45));
console.log(solution(125));
