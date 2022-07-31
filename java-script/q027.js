// 부족한 금액 계산하기 (프로그래머스)

function solution(price, money, count) {
  let pay = 0;

  for (let i = 1; i <= count; i++) {
    pay += price * i;
  }

  //   if (money - pay >= 0) {
  //     return 0;
  //   } else {
  //     return (money - pay) * -1;
  //   }

  // 삼항연사자로 리턴
  return money > pay ? 0 : (money - pay) * -1;
}

console.log(solution(3, 20, 4)); // 3 + 6 + 9 + 12 = 30
