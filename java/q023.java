// 합 (백준 8393번)
import java.util.Scanner;

public class q023 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int i = 1;
        int total = 0;

        while(i <= a){
            total += i;
            i++;
        }

        System.out.println(total);
    }
}
