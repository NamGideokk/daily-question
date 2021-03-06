// 두 개 뽑아서 더하기

// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아
// return 하도록 solution 함수를 완성해주세요.

// 제한사항

// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

function solution(numbers) {
  let answer = [];
  let set = new Set();

  for (let i = 0; i <= numbers.length - 1; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      let sum = numbers[i] + numbers[j];
      set.add(sum);
    }
  }

  set.forEach((x) => answer.push(x));

  answer.sort((a, b) => a - b);

  return answer;
}

// values 에 중복값을 허용하지 않는 Set 객체를 이용한다.
// Set 객체에 값을 넣고 그 값들은 다시 배열에 이동시킨 후 오름차순 정렬.
