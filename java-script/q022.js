// 문자열 내림차순으로 배치하기.

function solution(s) {
  return s.split("").sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
console.log(solution("hwFhgFEZfg"));

// 먼저 string 을 한글자씩 배열로 만든다.
// sort 메소드를 실행하여 오름차순으로 먼저 정렬한다.
// reverse 메소드를 실행하여 거꾸로 배치한다.
// join 메소드를 실행하여 다시 string으로 변환하여 리턴한다.
