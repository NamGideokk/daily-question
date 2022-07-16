// 핸드폰 번호 가리기

const num1 = "01033334444";
const num2 = "027778888";

// 뒤에 4자리 자르기
const back1 = num1.slice(-4);
const back2 = num2.slice(-4);

// 뒤에 4자리 빼고 가져오기
const front1 = num1.substr(0, num1.length - 4);
const front2 = num2.substr(0, num2.length - 4);

// 모든 숫자 * 로 교체
const result1 = front1.replace(/[0-9]/g, "*");
const result2 = front2.replace(/[0-9]/g, "*");

console.log(result1 + back1);

// 1. 변환할 문자열과 변환하지 않는 문자열 분리하기
// 2. replace 함수와 정규 표현식을 이용해 변환
// 3. 다시 합치기
