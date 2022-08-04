// 나누어 떨어지는 숫자 배열 (프로그래머스)

function solution(arr, divisor) {
  let answer = [];

  //   for (let number of arr) {
  //     number % divisor === 0 ? answer.push(number) : answer.push();
  //   }
  //   return answer.length > 0 ? answer.sort((a, b) => a - b) : answer.push(-1);

  for (let number of arr) {
    if (number % divisor === 0) {
      answer.push(number);
    }
  }

  if (answer.length === 0) answer.push(-1);

  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
