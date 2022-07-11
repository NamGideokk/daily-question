// 연습문제 Q14
import java.util.Scanner;

public class q020 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("정수를 입력하세요 : ");
        int a = sc.nextInt();

        for(int i = 1; i <= a; i++){
            System.out.print("* ");

            for(int j = 1; j <= a-1; j++){
                System.out.print("* ");
            }

            System.out.println();
        }
    }
}
