// 수박수박수박수박수? (프로그래머스)

function solution(n) {
  let answer = "";

  for (let i = 1; i <= n; i++) {
    i === 1 || i % 2 === 1 ? (answer += "수") : (answer += "박");
  }

  return answer;
}

console.log(solution(3));
console.log(solution(4));
