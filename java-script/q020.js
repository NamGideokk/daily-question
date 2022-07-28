// 문자열 다루기 기본 (프로그래머스)
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성되어 있으면 true.

function solution(s) {
  // 먼저 길이가 4 or 6이 아닐경우 early exit
  if ((s.length != 4 && s.length != 6) || s.length > 8) {
    return false;
  }

  // 자바스크립트는 문자가 섞여있어도 Number()로 형변환을 하면 type은 Number로 나온다.
  // let typeCheck = Number(s);

  // 그래서 형변환된 변수에 + 1 더해 값이 제대로 있으면 true
  // 제대로 문자가 포함되어 NaN이 찍히면 false를 이용하여 answer 반환.
  // if (typeCheck + 1) {
  //   return answer;
  // } else {
  //   answer = false;
  //   return answer;
  // }

  let arr = s.split("");
  return arr.every((val) => !isNaN(val));
}

console.log(solution("aBCD")); // false
console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("21234")); // false
console.log(solution("bb34")); // false
console.log(solution("134")); // false
console.log(solution("123456")); // true
console.log(solution("123b56")); // false
console.log(solution("10e1")); // false
