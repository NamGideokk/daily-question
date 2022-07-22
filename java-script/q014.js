// OX퀴즈 (백준 8958번)
function solution(answer) {
  let arr = answer.split("");
  let num = 0;
  let sum = 0;

  arr.forEach((x) => {
    if (x == "O") {
      num++;
    } else {
      num = 0;
    }
    sum += num;
  });

  return sum;
}

// string 타입으로 입력받은 인자값을 쪼개서 배열로 넣고
// forEach()를 이용해 문자열이 O 인지 X 인지 확인한다.
// O 면 숫자 0을 1씩 증가시켜 나가고, X 면 숫자를 0으로 초기화한다.
// 변수 sum에 각 숫자를 모두 더한값을 할당하여 출력한다.

console.log(solution("OOXXOXXOOO"));
console.log(solution("OXOXOXOXOXOXOX"));
console.log(solution("OOOOOOOOOO"));
console.log(solution("OOOOXOOOOXOOOOX"));
