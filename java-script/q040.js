// 음양 더하기

// 제한 사항
// absolutes의 길이, 요소수 : 1 ≤ absolutes ≥ 1,000
// signs의 길이는 absolutes와 동일, true는 양수, false는 음수를 의미

function solution(absolutes, signs) {
  let answer = 0;

  absolutes.map((number, idx) => {
    let num;
    signs[idx] ? (num = 1) : (num = -1);

    answer += number * num;
  });

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
