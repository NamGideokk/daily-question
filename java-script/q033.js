// 문자열 내 마음대로 정렬하기 (프로그래머스)

function solution(strings, n) {
  let answer = [];

  //   for (let i = 0; i < strings.length; i++) {
  //     console.log("문자열 자르기 : ", strings[i].substr(n, strings.length - 1));
  //   }

  answer = strings.sort((a, b) => {
    console.log(a[n], b[n]);
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });

  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
