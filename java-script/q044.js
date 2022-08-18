// K번째수 (프로그래머스)

// 1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 3. 2에서 나온 배열의 3번째 숫자는 5입니다.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다. 길이 고정!

function solution(array, commands) {
  var answer = [];

  for (var i = 0; i < commands.length; i++) {
    var start = commands[i][0]; // 2번째 (5 부터)
    var end = commands[i][1]; // 5번째 (3 까지)
    var num = commands[i][2]; // 그 중에서 정렬 후 3번 째 수 (2, 3, 5, 6 중 5);

    // slice(n번 인덱스부터, n번 인덱스까지 (미포함));
    var newArr = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(newArr[num - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
