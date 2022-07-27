// 문자열 다루기 기본 (프로그래머스)
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성되어 있으면 true.

function solution(s) {
  let answer = true;

  // 먼저 길이가 4 or 6이 아닐경우 early exit
  if (s.length != 4 && s.length != 6) {
    return false;
  }

  let arr = s.split("");
  let result = arr.every((val) => typeof Number(val) == "number");

  return result;
}

console.log(solution("aBCD")); // false
console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("21234")); // false
console.log(solution("bb34")); // false
console.log(solution("134")); // false
console.log(solution("123456")); // true
console.log(solution("123b56")); // false
