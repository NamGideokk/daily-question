// X보다 작은 수 (백준 10871번)
import java.util.Scanner;

public class q031 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int x = sc.nextInt();
        int[] arr = new int[n];

        for(int i = 1; i <= n; i++){
            arr[i - 1] = sc.nextInt();
        }

        for(int i = 0; i <= arr.length-1; i++){
            if(arr[i] < x){
                System.out.print(arr[i] + " ");
            }
            
        }
    }
}
