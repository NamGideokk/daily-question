// 평균 (백준 1546번)

import java.util.Arrays;
import java.util.Scanner;

public class q038 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        // 오차를 줄이기 위해 double 형 사용
        // 첫번째 입력 수 만큼 점수를 받기 위해 배열을 사용
        double arr[] = new double[sc.nextInt()];

        // 배열의 0번 인덱스부터 차례대로 값 삽입
        for(int i = 0; i <arr.length; i++){
            arr[i] = sc.nextDouble();
        }
        sc.close();

        double score = 0;
        // 정렬을 통해 배열의 마지막값을 최대값으로 고정
        Arrays.sort(arr);

        for(int i = 0; i < arr.length; i++){
            score += ((arr[i] / arr[arr.length-1]) * 100);
        }

        System.out.println(score / arr.length);
    }
}
