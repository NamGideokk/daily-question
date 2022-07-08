import java.util.Scanner;

public class q007 {
 
    public static void main(String[] args){

        // 정수 a, b를 입력하고 b-a 출력하기.
        // 단, b가 a보다 작을 경우 변수 b값 다시 입력받기.
        Scanner sc = new Scanner(System.in);
        
        System.out.print("a : ");
        int a = sc.nextInt();
        
        // 조건식이 true이면 반복 실행.
        while(a <= 0){
            System.out.print("0보다 큰 숫자를 입력하세요. a : ");
            a = sc.nextInt();
        }

        System.out.print("b : ");
        int b = sc.nextInt();

        while(b <= 0 | b <= a){
            System.out.print("0보다 크고 " + a + "보다 큰 숫자를 입력하세요. b : ");
            b = sc.nextInt();
        }
        
        System.out.println(b + " - " + a + " = " + (b-a));
    }
}
