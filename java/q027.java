// A+B - 7 (백준 11021번)
import java.util.Scanner;

public class q027 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();

        for(int i = 1; i <= x; i++){
            int a = sc.nextInt();
            int b = sc.nextInt();

            System.out.println("Case #" + i + ": " + (a + b));
        }
    }
}
