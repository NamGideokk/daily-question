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

        System.out.println(no + " 자리수의 숫자입니다.");
    }
}
