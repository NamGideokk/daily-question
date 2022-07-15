// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach((x) => {
//   sum += x;
// });

// console.log(sum);

// const result = arr.reduce((prev, cur) => {
//   console.log(prev, cur);
//   return prev + cur;
// }, 0);

// console.log(result);

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) {
  let answer = 0;

  let result = arr.reduce((prev, cur) => {
    return prev + cur;
  }, answer);

  answer = result / arr.length;

  return answer;
}
