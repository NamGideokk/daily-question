// A+B - 3 (백준 10950번)
import java.util.Scanner;

public class q022 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("계산할 횟수 : ");
        int times = sc.nextInt();
        int a = 0;
        int b = 0;

        int[] arr = new int[times];

        for(int i = 0; i <= times - 1; i++){
            a = sc.nextInt();
            b = sc.nextInt();

            arr[i] = a + b;
        }

        for(int i = 0; i <= times - 1; i++){
            System.out.println(arr[i]);
        }

    }
}
