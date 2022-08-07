// 소수 찾기 (프로그래머스)

// 소수 - 1과 자기 자신으로만 나누어 지는 수 (1은 제외)
// 2 ≤ n ≥ 1000000

function solution(n) {
  let answer = 0;

  //   for (let i = 2; i <= n; i++) {
  //     if (i === 2) {
  //       answer++;
  //     }
  //   }

  let cnt = 0;
  for (let a = 2; a <= n; a++) {
    cnt = 0; // 돌때마다 cnt 초기화
    for (let b = 1; b <= a; b++) {
      if (a % b == 0) cnt++; // 2를 1로 나눈 몫이 0이면 cnt 증가
    }
    if (cnt == 2) answer++; // cnt가 2면 answer 를 증가?
    // => 1과 자기 자신 두 수로만 나눠져야 하기 때문에 2일때만 갯수 증가!
  }
  // 이중 반복문 때문에 시간 초과가 걸림. (n은 1000000까지 사용 가능)

  return answer;
}

function solution2(n) {
  let arr = new Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = 2; j <= n / i; j++) {
        arr[i * j] = false;
      }
    }
  }
  // 이중 반복문이지만 n의 절반까지만 반복하기때문에 시간을 단축

  return arr.filter((bool) => bool === true).length;
}

console.log(solution2(10));
console.log(solution2(5));
