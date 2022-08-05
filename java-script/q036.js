// 시저 암호 (프로그래머스)

function mySolution(s, n) {
  let answer = "";
  let arr = s.split("");
  let newArr = [];

  for (let alphabet of arr) {
    let number = alphabet.charCodeAt(0);

    // if (number + n > 122 || (number + n >= 90 && number + n < 96)) {
    if (number + n > 122 || (number + n >= 90 && number + n < 96)) {
      number -= 26;
    }

    if (alphabet === " ") {
      newArr.push(" ");
    } else {
      newArr.push(String.fromCharCode(number + n));
    }
  }
  answer = newArr.join("");

  // 기본 테스트 3개는 통과하지만 제출하면 모든 테스트는 실패한다... 와이?
  // number 변수의 범위체크를 추가하니 테스트 9만 통과
  // 소문자는 아무리 밀어도 소문자로 출력, 대문자는 대문자로 출력인거같다.
  // if(조건식) 수정후 1, 3, 5, 11 테스트 통과 (통과했던 9 테스트는 탈락으로 변경)

  return answer;
}

// 다른 사람 풀이
function solution(s, n) {
  return s
    .split("")
    .map((element) => {
      if (element === " ") return " ";
      const code = element.charCodeAt(0);
      if ((code + n > 90 && code <= 90) || code + n > 122) {
        return String.fromCharCode(code + n - 26);
      } else {
        return String.fromCharCode(code + n);
      }
    })
    .join("");
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
console.log(solution("P", 15));
console.log(solution("uU eE zZ aA", 25));
