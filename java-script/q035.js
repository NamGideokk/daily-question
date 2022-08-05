// 정수 제곱근 판별 (프로그래머스)

// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
  let answer = 0;
  let isInteger;

  //   for (let i = 1; i <= n; i++) {
  //     if (n === Math.pow(i, 2)) {
  //       answer = Math.pow(i + 1, 2);
  //     }
  //   }

  //   if (answer === 0) answer = -1;
  // 정답이긴 하나 n의 크기때문에 for문에서 시간 초과

  // n을 루트? 한 값이 정수인지 아닌지 판별 후 정답 리턴
  // 처리속도도 0.04ms 정도로 매우 빨라졌다.
  let sqrt = Math.sqrt(n);
  isInteger = Number.isInteger(sqrt);

  if (isInteger) {
    answer = Math.pow(sqrt + 1, 2);
  } else {
    answer = -1;
  }

  return answer;
}

console.log(solution(121));
console.log(solution(3));
