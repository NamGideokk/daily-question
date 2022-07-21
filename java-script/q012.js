// 콜라츠 추측 (프로그래머스)

// 주어진 숫자가 1이 될때까지 실행된 작업의 횟수 출력하기.
// 단, 주어진 숫자가 1이거나 실행 작업 횟수가 500 이상이 되면 각각 0, -1 을 리턴한다.

function solution(num) {
  let answer = 0;
  let cnt = 0;

  console.log(`num : ${num}`);

  if (num == 1) {
    return answer;
  }

  while (num > 1) {
    // 짝수 일때
    if (num % 2 == 0) {
      console.log(`짝수 실행 - num : ${num}, cnt : ${cnt}`);
      num = num / 2;
      cnt++;
    } else {
      // 홀수 일때
      console.log(`홀수 실행 - num : ${num}, cnt : ${cnt}`);
      num = num * 3 + 1;
      cnt++;
    }

    if (cnt >= 500) {
      answer = -1;
      return answer;
    }
  }

  return (answer = cnt);
}

console.log(solution(626331));
