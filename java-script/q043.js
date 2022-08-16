// [1차] 다트 게임

// 다트 게임은 총 3번의 기회가 주어진다.
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다. (총 점수 최저: 0, 최대: 30)
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시
// 점수에서 1제곱, 2제곱, 3제곱 으로 계산된다.
// 옵션으로 스타상(*), 아차상(#)이 존재하며
// 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
// 아차상(#) 당첨 시 해당 점수는 마이너스 된다.
// 스타상(*)이 첫 번째 기회에서 나올 시 첫 번째 점수만 2배가 된다.
// 스타상(*)의 효과는 다른 스타상(*)과 중첩될 수 있다. (4배)
// 스타상(*)과 아차상(#)은 중첩될 수 있다. (-2배)
// S, D, T는 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재하거나, 존재하지 않을 수도 있다.

// 점수 | 보너스 | [옵션] 으로 이루어진 문자열
// 점수 : 0 ~ 10의 정수
// 보너스 : S, D, T 중 하나
// 옵션 : *, # 중 하나이며, 없을 수도 있다.

function solution(dartResult) {
  var answer = 0;
  var arr = [];
  var reg = /\d{1,2}[SDT][*#]?/g;
  var numberReg = /\d+/g; // 점수 분리
  var timesReg = /[SDT]/g; // Single, Double, Triple 분리
  var awardReg = /[*#]/g; // 스타상, 아차상 분리

  // var reg2 = /(([\d]+)([SDT])([*#]?))+/g;

  // 정규표현식을 써야할거 같다.
  // var result = reg.exec(dartResult); // 1. 정규표현식 검사 (1D 추출)
  // var score1 = dartResult.slice(0, result[0].length); // 2. 1D를 첫번째 점수 변수로 저장
  // var newStr = dartResult.slice(score1.length); // 3. 1D 이후의 문자열 추출
  // var result2 = reg.exec(newStr); // 4. 두번째 정규표현식 검사 (2S# 추출)

  // console.log("첫번째 점수 : ", score1);
  // console.log("두번째 문자열 : ", newStr);

  // console.log("------------------------");
  // console.log(result2);

  // --------------------------------------------------------------------------
  // match 메서드는 첫 번째 인수로 받은 정규 표현식과 일치하는 문자열을
  // 순서대로 저장해서 배열로 반환한다. match 메서드는 원본 문자열을 수정하지 않는다.
  var score = dartResult.match(reg);

  score.forEach((value, idx) => {
    var a = parseInt(value.match(numberReg).join("")); // 숫자 분리하여 a에 할당
    var b = value.match(timesReg).join(""); // S, D, T 분리하여 b에 할당
    var c = value.match(awardReg); // 스타상, 아차상 분리하여 c에 할당

    if (b === "S") {
      answer = a;
    } else if (b === "D") {
      answer = Math.pow(a, 2);
    } else if (b === "T") {
      answer = Math.pow(a, 3);
    }

    if (c) {
      c = c.join("");
    }

    arr.push(answer);

    if (c === "*") {
      arr[idx] *= 2;
      arr[idx - 1] *= 2;
    } else if (c === "#") {
      arr[idx] *= -1;
    }
  });

  return (answer = arr.reduce((prev, curr) => {
    prev += curr;
    return prev;
  }, 0));
}

console.log(solution("1S2D*3T")); // 2 + 8 + 27 = 37
console.log(solution("1D2S#10S*")); // 1 + -2 + 10 = 9
console.log(solution("1D2S0T")); // 1 + 2 + 0 = 3
