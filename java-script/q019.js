// 이상한 문자 만들기 (프로그래머스)
// 인덱스를 기준으로 짝/홀수가 아닌, 공백으로 기준으로 단어별로 짝/홀수?
// 공백 여러개일때 컨디션 추가해야함

function solution(s) {
  let answer = "";
  let arr = s.split("");
  let newArr = [];

  arr.map((value, idx) => {
    if (idx == 0 || idx % 2 == 0) {
      newArr.push(value.toUpperCase());
    }

    if (idx != 0 && idx % 2 == 1) {
      newArr.push(value.toLowerCase());
    }
  });

  answer = newArr.join("");

  return answer;
}

console.log(solution("try hello world"));
