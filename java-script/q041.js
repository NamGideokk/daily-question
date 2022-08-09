// [1차] 비밀지도

// 1 ≤ n ≤ 16
// n은 arr1, arr2 배열의 길이다.
// arr1, arr2 각 정수 배열의 원소(요소) x를 이진수로 변환했을 때의 길이는 n 이하이다.
// 즉, 0 ≤ x ≤ 2^n-1 을 만족한다.
// 각 칸은 '#' = 벽과, ' ' = 공백으로 이루어져 있으며, (1 = "#", 0 = " ")
// 지도1과 지도2의 겹치는 칸이 하나라도 벽이면 전체지도에서도 벽이고,
// 모두 공백이어야만 전체지도에서 벽이 된다.

// 비밀지도를 해독하여 '#', ' '(공백)으로 구성된 문자열 배열로 출력하라.

function solution(n, arr1, arr2) {
  let answer = [];
  let newArr1;
  let newArr2;

  // 일단 무식하게 진행. 나중에 리팩토링
  newArr1 = arr1.map((value) => {
    let binary = value.toString(2);
    let length = binary.length;

    // 💩💩💩
    // if (length == 4) {
    //   binary = "0" + binary;
    // } else if (length == 3) {
    //   binary = "00" + binary;
    // } else if (length == 2) {
    //   binary = "000" + binary;
    // } else if (length == 1) {
    //   binary = "0000" + binary;
    // }

    if (length < n) {
      for (let k = length; k < n; k++) {
        binary = "0" + binary;
      }

      return binary;
    }

    if (length == n) return binary;
  });

  newArr2 = arr2.map((value) => {
    let binary = value.toString(2);
    let length = binary.length;

    // 💩💩💩
    // if (length == 4) {
    //   binary = "0" + binary;
    // } else if (length == 3) {
    //   binary = "00" + binary;
    // } else if (length == 2) {
    //   binary = "000" + binary;
    // } else if (length == 1) {
    //   binary = "0000" + binary;
    // }

    // while (length < n) {
    //   binary = "0" + binary;
    // }

    if (length < n) {
      for (let k = length; k < n; k++) {
        binary = "0" + binary;
      }

      return binary;
    }

    if (length == n) return binary;
  });

  console.log("중간점검 : ", newArr1, newArr2);

  for (let i = 0; i < n; i++) {
    let box = "";

    for (let j = 0; j < n; j++) {
      if (newArr1[i].charAt(j) == "1" || newArr2[i].charAt(j) == "1") {
        box += "#";
      } else {
        box += " ";
      }
    }
    answer[i] = box;
  }

  // 1번 케이스는 정답이지만 2번 케이스는 틀렸다.
  // n의 숫자가 정사각형 한 변의 길이라고 봐야하는데
  // 2진법으로 변환한 수를 5자리로 고정시켜 버려서 그런거같다.
  // 유동적으로 만들어 줘야 한다.
  // while 문을 통해서 2진법으로 변환한값의 길이가 n이랑 같을때까지
  // 앞자리에 "0"을 붙이고 싶은데 프로그램이 죽는다. 이유가 뭘까
  // 진짜 더럽게 풀긴했다 ㅠㅠ 다른 사람들 답은 대단하다...

  return answer;
}

// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
