// 최댓값 (백준 2562번)

import java.util.Scanner;

public class q036 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[9];
        int max = 0;
        int idx = 0;

        for(int i = 0; i < 9; i++){
            arr[i] = sc.nextInt();
        }

        for(int i = 0; i < 9; i++){
            if(arr[i] > max){
                max = arr[i];
                idx = i + 1;
            }
        }
        System.out.println(max);
        System.out.println(idx);
    }
}
