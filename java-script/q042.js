// 문자열 내 p와 y의 개수 (프로그래머스)

// 알파벳 소문자, 대문자 상관없이 p와 y가 문자열안에 같은 개수가 있으면 ture 아니면 false

function solution(s) {
  var pCount = 0;
  var yCount = 0;

  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == "p" || s.charAt(i) == "P") pCount++;
    if (s.charAt(i) == "y" || s.charAt(i) == "Y") yCount++;
  }

  return pCount === yCount ? true : false;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
