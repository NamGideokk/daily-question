// 이상한 문자 만들기 (프로그래머스)
// 인덱스를 기준으로 짝/홀수가 아닌, 공백으로 기준으로 단어별로 짝/홀수?
// 공백을 기분으로 단어별로 자른후 각각 잘린 단어들의 시작점을 인덱스 0으로 본다.
// 공백 여러개더라도 위의 방식대로 동작하도록 해야함

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

  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(
  //     arr[i]
  //       .split("")
  //       .map((value, idx) =>
  //         idx % 2 ? value.toLowerCase() : value.toUpperCase()
  //       )
  //       .join("")
  //   );
  // }
  // return newArr.join(" ");

  // 정규표현식 - 문자가 2개 이상 붙어있을때 변환4
  // return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
  //   return a[0].toUpperCase() + a[1].toLowerCase();
  // });
}

console.log(solution("try hello world"));
