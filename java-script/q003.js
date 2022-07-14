// a, b 는 자연수
// a 와 b 사이의 모든 정수의 합 구하기

// solution(3, 5);
// return 12

// solution(3, 3);
// return 3

// solution(5, 3);
// return 12

function solution(a, b) {
  var answer = 0;

  console.log(`a : ${a}, b : ${b}`);

  if (a >= b) {
    for (var i = b; i <= a; i++) {
      answer += i;
    }
  } else if (a <= b) {
    for (var i = a; i <= b; i++) {
      answer += i;
    }
  } else if (a === b) {
    answer = a;
  }

  return answer;
}
