// 나머지가 1이 되는 수 찾기(프로그래머스)

function solution(n) {
  for (let i = 2; i <= n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(9));
