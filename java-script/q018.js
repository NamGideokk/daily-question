// 정수 내림차순으로 배치하기 (프로그래머스)

// 순서 : 문자열로 변환 -> 문자열의 배열로 변환 -> 정수형의 배열로 변환
// -> 내림차순 정렬 -> 배열을 문자열로 변환 -> 문자열을 정수형으로 변환
function solution(n) {
  let answer = 0;
  let arr = String(n)
    .split("")
    .map((value) => Number(value))
    .sort((a, b) => b - a)
    .join("");

  answer = Number(arr);

  return answer;
}

console.log(solution(118372));
