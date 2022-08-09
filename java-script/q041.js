// [1차] 비밀지도

// 1 ≤ n ≤ 16
// n은 arr1, arr2 배열의 길이다.
// arr1, arr2 각 정수 배열의 원소(요소) x를 이진수로 변환했을 때의 길이는 n 이하이다.
// 즉, 0 ≤ x ≤ 2^n-1 을 만족한다.

// 비밀지도를 해독하여 '#', ' '(공백)으로 구성된 문자열 배열로 출력하라.

function solution(n, arr1, arr2) {
  let answer = [];
  let newArr1;
  let newArr2;

  // 일단 무식하게 진행. 나중에 리팩토링
  newArr1 = arr1.map((value) => {
    let binary = value.toString(2);
    let length = binary.length;

    if (length == 4) {
      binary = "0" + binary;
    } else if (length == 3) {
      binary = "00" + binary;
    } else if (length == 2) {
      binary = "000" + binary;
    } else if (length == 1) {
      binary = "0000" + binary;
    }

    return binary;
  });

  newArr2 = arr2.map((value) => {
    let binary = value.toString(2);
    let length = binary.length;

    if (length == 4) {
      binary = "0" + binary;
    } else if (length == 3) {
      binary = "00" + binary;
    } else if (length == 2) {
      binary = "000" + binary;
    } else if (length == 1) {
      binary = "0000" + binary;
    }

    return binary;
  });

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
