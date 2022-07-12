// N 찍기 (백준 2741번)
// 기찍 N (백준 2742번)
import java.util.Scanner;

public class q025 {
    public static void main(String[] args)   {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();

        // 1 ~ n 까지 한 줄 씩 출력.
        // for(int i = 1; i <= a; i++){
        //     System.out.println(i);
        // }

        // n ~ 1 까지 한 줄 씩 출력.
        for(int i = a; i >= 1; i--){
            System.out.println(i);
        }
    }
}
