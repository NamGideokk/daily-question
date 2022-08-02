// 가운데 글자 가져오기 (프로그래머스)

function solution(s) {
  let answer = "";

  if (s.length % 2 === 1) {
    answer = s[(s.length - 1) / 2];
  } else {
    let idx = s.length / 2 - 1;
    answer = s.slice(idx, idx + 2);
  }

  return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));
