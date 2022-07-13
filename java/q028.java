import java.util.Scanner;

// A+B - 8 (백준 11022번)
public class q028 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();

        for(int i = 1; i <= x; i++){
            int a = sc.nextInt();
            int b = sc.nextInt();

            System.out.println("Case #" + i + ": " + a + " + " + b + " = " + (a + b));
        }
    
    }
}
