// 하샤드 수 (프로그래머스)

function solution(x) {
  let answer = true;
  let str = String(x);
  let sum = 0;
  let strSum = "";

  for (let i = 0; i < str.length; i++) {
    strSum += str.charAt(i);
    sum += Number(str.charAt(i));
  }

  if (Number(strSum) % sum !== 0) {
    answer = false;
  }

  return answer;
}

console.log(solution(13));
