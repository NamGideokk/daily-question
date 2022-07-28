// 평균은 넘겠지 (백준 4344번)
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력

import java.util.Scanner;

public class q043{
  public static void main(String[] args){

    Scanner sc = new Scanner(System.in);
    int times = sc.nextInt(); // 총 횟수
    int sum = 0; // 학생들의 점수 합계
    int avg; // 평균 점수 = 합계 / 학생수
    double highScore = 0; // 평균 점수보다 높은 점수 수
    double percent; // 평균 점수보다 높은 점수의 비율

    for(int i = 1; i <= times; i++){ // 총 횟수 만큼 반복
      int a = sc.nextInt(); // 점수를 입력할 학생 수
      int[] arr = new int[a]; // 학생 수 크기의 배열 생성
      
      for(int j = 0; j < arr.length; j++){ // 배열의 길이만큼 반복
        arr[j] = sc.nextInt(); // 배열에 점수 저장
      }
      
      for(int k = 0; k < arr.length; k++){
        sum += arr[k]; // 배열 요소를 하나씩 꺼내 sum 변수에 누적 합
      }
      
      avg = sum / a; // 평균 점수
      System.out.println("평균점수 : " + avg);

      for(int l = 0; l < arr.length; l++){
        if(arr[l] >= avg ){
          highScore++;
        }
      }
      System.out.println("평균점수보다 높은 점수는 총 " + highScore + "명");

      percent = 100 * highScore / arr.length;

      System.out.println("비율" + Math.round(percent * 1000) / 1000.0 + "%");

      percent = 0; // 초기화
      highScore = 0; // 초기화
      sum = 0; // 총 점수 합계 0으로 초기화
      avg = 0; // 출력 후 평균 점수 0으로 초기화
    }       
  }
}