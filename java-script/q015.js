// 제일 작은 수 제거하기 (프로그래머스)

function solution(arr) {
  let answer = [];
  let min = arr[0];

  if (arr.length <= 1) {
    return [-1];
  }

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  answer = arr.filter((x) => x !== min);

  return answer;
}

// console.log(solution([4, 3, 2, 1]));
console.log(solution([4, 3, 2, 9]));
// console.log(solution([10]));
