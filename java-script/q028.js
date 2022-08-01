// 완주하지 못한 선수 (프로그래머스)

function solution(participant, completion) {
  // console.log(participant, completion);

  // 효율성 테스트 통과 ❌
  // for (let i = 0; i < completion.length; i++) {
  //   participant.splice(participant.indexOf(completion[i]), 1);
  // }
  // answer = participant.join("");

  // 알파벳순으로 정렬해서 순서를 똑같이 맞춘다.
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    // 두 요소가 같지 않을 경우 해당 요소를 리턴
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
