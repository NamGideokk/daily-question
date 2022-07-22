// 나머지 (백준 3052번)
import java.util.Scanner;

public class q039 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[10];
        
        // 배열에 42로 나눈 나머지 수 삽입
        for(int i = 0; i < 10; i++){
            arr[i] = sc.nextInt() % 42;
        }



        for(int i = 0; i < 10; i++){
        System.out.println(arr[i]);
        }
    }
}
