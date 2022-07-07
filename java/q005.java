import java.util.Scanner;

public class q005 {
 
    // 1부터 n까지의 합 구하기
    static int totalSum(int a){
        int i = 1;
        int sum = 0;

        for(i = 1; i <= a; i++){
            sum += i;
        }

        return sum;
    }

    static int totalSum2(int a){
        int i = 1;
        int sum = 0;

        for(i = 1; i <= a; i++){
            if(i < a){
                System.out.print(i + " + ");
            } else {
                System.out.print(i);
            }
            sum += i;
        }
        System.out.print(" = ");

        return sum;
    }

    static int gaussianSum(int n){
        int i = 1;
        int sum = 0;

        sum = (i + n) * n/2;

        return sum;
    }

    static int totalSum3(int a, int b){
        int sum = 0;

        // b -> a
        if(a > b){
            for(int i = b; i >= a; i++){
                sum += i;
            }
        // a -> b
        } else {
            for(int i = a; i >= b; i++){
                sum += i;
            }
        }
        return sum;
    }

    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        System.out.println("1부터 n까지의 합을 구하는 프로그램입니다.");
        System.out.print("n의 값 (정수를 입력하세요) : ");
        int n = sc.nextInt();

        int sum = 0;
        int i = 1;

        while(i <= n){
            sum += i;
            i++;
        }
        
        // System.out.println("1 부터 " + n + "까지의 합은 " + sum + "입니다." + "마지막 i의 값은 " + i + "입니다.");
        // System.out.println("-------------------------------------------------------------------------");
        // System.out.println("for문을 이용한 총 합계 구하기 : " + totalSum(10));
        System.out.println(totalSum2(10));
        System.out.println(gaussianSum(3));
        System.out.println(totalSum3(3, 5));
    }
}
