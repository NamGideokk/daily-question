// arr 은 자연수를 담은 배열
// divisor 는 자연수

// solution([5, 9, 7, 10], 5);
// return [5, 10]

// solution([3, 2, 6], 10);
// return [-1]

// 구현하기

function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter((x) => x % divisor === 0);

  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer.sort((a, b) => a - b);
  }
  return answer;
}
