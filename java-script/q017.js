// 최대공약수와 최소공배수 (프로그래머스)

// 유클리드 호제법 이용하기

function solution(n, m) {
  let answer = [];
  let gcd = 0; // 최대공약수
  let lcm = 0; // 최소공배수

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }

  for (let i = 1; i <= m; i++) {
    if (m % i == 0) {
      answer.push(i);
    }
  }

  console.log(gcd);

  return answer;
}

console.log(solution(3, 12));
