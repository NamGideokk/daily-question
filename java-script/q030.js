// 서울에서 김서방 찾기 (프로그래머스)

function solution(seoul) {
  let answer = "";

  answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`;

  return answer;
}

console.log(solution(["Jane", "Han", "Kim"]));
