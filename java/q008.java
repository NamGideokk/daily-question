import java.util.Scanner;

public class q008 {
    public static void main(String[] args){
        // 입력받은 숫자의 자리수 출력하기.
        Scanner sc = new Scanner(System.in);

        System.out.print("숫자를 입력하세요 : ");
        int a = sc.nextInt();

        while(a <= 0){
            System.out.print("0보다 큰 숫자를 입력하세요 : ");
            a = sc.nextInt();
        }

        int no = 0;
        while(a > 0){
            a = a/10;
            no++;
        }
        // 100을 10으로 나누면 10. no은 1증가해서 1.
        // 10을 10으로 나누면 1. no은 1증가해서 2.
        // 1을 10으로 나누면 0.1. no은 1증가해서 3.
        // 0.1은 0보다 작기때문에 반복문 종료

        System.out.println(no + " 자리수의 숫자입니다.");
    }
}
