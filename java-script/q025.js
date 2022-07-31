// 없는 숫자 더하기 (프로그래머스)

function solution(numbers) {
  let arr = [];
  // 배열 크기만큼 돌기

  // numbers 요소에 0부터 9까지 숫자 있는지 없는지 찾기
  for (let i = 0; i <= 9; i++) {
    // numbers 에 i(0 ~ 9)가 포함되어 있으면 ture, 없으면 false
    let check = numbers.includes(i);
    if (!check) {
      // check == false 이면 arr 배열에 해당 숫자 추가
      arr.push(i);
    }
  }

  // reduce 메소드를 통해 arr 요소의 총합 계산하여 리턴
  return arr.reduce((prev, curr) => {
    return (prev += curr);
  }, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
