// 숫자 문자열과 영단어
// 2021 카카오 채용연계형 인턴십
/*
다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

    1478 → "one4seveneight"
    234567 → "23four5six7"
    10203 → "1zerotwozero3"

    이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나,
    혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
    s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

    0	zero
    1	one
    2	two
    3	three
    4	four
    5	five
    6	six
    7	seven
    8	eight
    9	nine

    제한사항
    1 ≤ s의 길이 ≤ 50
    s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
    return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
*/

function solution(s) {
  var answer = 0;
  return parseInt(
    s
      .replaceAll("zero", 0)
      .replaceAll("one", 1)
      .replaceAll("two", 2)
      .replaceAll("three", 3)
      .replaceAll("four", 4)
      .replaceAll("five", 5)
      .replaceAll("six", 6)
      .replaceAll("seven", 7)
      .replaceAll("eight", 8)
      .replaceAll("nine", 9)
  );
}

console.log(solution("one4seveneight"));
