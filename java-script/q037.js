// 체육복 (프로그래머스)

// n = 전체 학생수
// lost = 체육복을 도난 당한 학생 번호
// reserve = 여벌의 체육복을 가지고 있는 학생 번호
function solution(n, lost, reserve) {
  let answer = 0;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let newLost = lost.filter((number) => !reserve.includes(number));
  let newReserve = reserve.filter((number) => !lost.includes(number));
  answer = n - newLost.length;

  for (let studentNO of newLost) {
    for (let studentNO2 of newReserve) {
      if (studentNO === studentNO2 + 1 || studentNO === studentNO2 - 1) {
        answer++;
        newReserve = newReserve.filter((number) => studentNO2 !== number);
        break;
      }
      //   if (answer === n) break;
    }
  }

  // 체육복을 빌린 학생(lost의 요소)은 바로 넘어가야함.
  // break; 로 반복문 탈출
  // filter()를 사용하여 빌려준 학생 번호는 삭제해서 반복문에 또 다시 들어가지 않게 함
  // 아직 테스트 3,5,7,12 는 통과 못함
  // 'studentNO === studentNO2' 조건식 추가후 테스트 5,12 만 남음
  // 여벌의 체육복을 가져왔는데 도단당한 경우의 케이스를 제어하지 못했다.
  // 문제를 제한사항까지 꼭 잘 읽자...

  // 각 배열을 정렬하고, 동일한 요소값을 확인하여 없애준다.

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(8, [4, 2], [3, 5]));
console.log(solution(5, [5, 2], [5, 3, 1]));
console.log(solution(5, [5, 2], [5, 3, 1]));
