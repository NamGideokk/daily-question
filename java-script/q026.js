// 같은 숫자는 싫어 (프로그래머스)

function solution(arr) {
  let answer = [];

  // 인자값으로 들어온 배열 크기만큼 돌리기
  for (let i = 0; i < arr.length; i++) {
    // arr 의 요소가 정답 배열의 마지막값과 같지 않을때만 (중복이 아닐때만) 추가하기
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
