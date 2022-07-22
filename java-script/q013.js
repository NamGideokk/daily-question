// 나머지 (백준 3052번) - 자바스크립트로 풀기

function solution(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10) {
  let answer = 0;
  let set = new Set();
  let arr = [
    num1 % 42,
    num2 % 42,
    num3 % 42,
    num4 % 42,
    num5 % 42,
    num6 % 42,
    num7 % 42,
    num8 % 42,
    num9 % 42,
    num10 % 42,
  ];

  // for문 + 배열.push로 1~10번까지 42를 나눈몫을 넣고 싶은데, 변수 이름을 어떻게 써야할지 모르겠다..

  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }

  console.log(set);
  return (answer = set.size);
}
// 중복값을 받지않는 Set 자료구조를 이용해서 서로 다른값만 받아내고 size를 반환한다.

console.log(solution(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(solution(42, 84, 252, 420, 840, 126, 42, 84, 420, 126));
// console.log(solution(39, 40, 41, 42, 43, 44, 82, 83, 84, 85));
