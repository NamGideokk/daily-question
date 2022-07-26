// 최대공약수와 최소공배수 (프로그래머스)

// 유클리드 호제법 이용하기

function solution(n, m) {
  let answer = [];
  let greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  };
  let least = (a, b) => (a * b) / greatest(a, b);
  return [greatest(n, m), least(n, m)];
}

console.log(solution(2, 5));
