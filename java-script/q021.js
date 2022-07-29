// 문자열을 정수로 바꾸기 (프로그래머스)

//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(s) {
  if (s[0] === "+") {
    // substring(인덱스, 몇번째 문자열까지(생략시 전체 문자열))
    return Number(s.substring(1)); // 1번 인덱스 부터 끝까지 가져오기.
  } else if (s[0] === "-") {
    return Number(s.substring(1)) * -1;
  } else {
    return Number(s);
  }
}

console.log(solution("1234"));
console.log(solution("+1234"));
console.log(solution("-1234"));
