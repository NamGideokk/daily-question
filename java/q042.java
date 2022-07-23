import java.util.Random;
import java.util.Scanner;

// 연습문제 Q1
public class q042 {

    static int maxHeight(int[] a){
        int max = a[0];

        for(int i = 1; i <= a.length; i++){
            if(a[i] > max){
                max = a[i];
            }
        }
        return max;
    }

    public static void main(String[] args){
        Random rand = new Random();
        Scanner sc = new Scanner(System.in);

        System.out.println("사람수를 난수로 설정");
        System.out.print("사람수 : ");
        int n = sc.nextInt();

        int[] nums = new int[n];

        for(int i = 0; i < nums.length; i++){
            nums[i] = 100 + rand.nextInt(100);
        }

        System.out.println("사람은 총 " + n + "명이고, 각 사람들의 키는");
        for(int i = 0; i < nums.length; i++){
            System.out.println(nums[i] + "cm 입니다.");
        }
        System.out.println("가장 최장신은 " + maxHeight(nums) + "cm 입니다.");
    }
}
