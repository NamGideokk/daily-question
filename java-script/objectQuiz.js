// Q1. make a string out of an array (배열 -> 문자열)
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(); // 인자값은 구분자 (비어있으면 기본값 콤마(,))
  //   console.log(result, typeof result);
}

// Q2. make an array out of a string (문자열 -> 배열)
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(","); // split : 나뉘다
  //   console.log(result, Array.isArray(result));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] (거꾸로)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  //   console.log(result);
}

// Q4. make new array without the first two elements (첫 두 요소 제외하고 새 배열 만들기)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2); // slice 는 새로운 배열을 리턴한다.
  //   console.log(array);
  //   console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90 (점수가 90점인 학생 찾기)
{
  //   const result = students.filter((student) => student.score === 90); // filter 는 배열로 반환
  const result = students.find((student) => student.score === 90);
  //   console.log(result);
}

// Q6. make an array of enrolled students (enrolled = true 인 학생 찾기);
{
  const result = students.filter((student) => student.enrolled);
  //   console.log(result);
}

// Q7. make an array containing only the students' scores (점수만 따온 배열 만들기)
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  //   console.log(result);
}

// Q8. check if there is a student with the score lower than 50 (점수가 50점 미만의 학생 유무 확인)
{
  const result = students.some((student) => student.score < 50);
  //   console.log(result);
}

// Q9. compute students' average score (평균 점수 구하기)
{
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  //   console.log(result / students.length);
}

// Q10. make a string containing all the scores (모든 점수를 나열한 문자열 만들기)
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  //   console.log(result);
}

// Bonus! do Q10 sorted in ascending order (오름차순 정렬)
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();

  console.log(result);
}
