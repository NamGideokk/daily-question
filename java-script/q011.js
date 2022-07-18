// 자연수 뒤집어 배열로 만들기 (프로그래머스)

// 내 풀이
// 1. 숫자 -> 문자열
// 2. 문자열 -> 배열
// sort() 이용하여 내림차순 정렬
// 답이 숫자를 요소로 갖는 배열이기때문에 문자열 배열 ❌

const a = 12345;

function solution(n) {
  let answer = [];

  //   const str = String(n);
  //   console.log(str, typeof str);
  //   const arr = str.split("");
  //   console.log(arr);

  do {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return answer;
}

console.log(solution(a));
