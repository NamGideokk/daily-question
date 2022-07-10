import java.util.Scanner;

public class q014 {
    public static void main(String[] args){
        // 45분 일찍 일어나는 알람
        Scanner sc = new Scanner(System.in);
        
        System.out.print("a (0 ~ 23) :");
        int a = sc.nextInt();
        System.out.print("b (0 ~ 59) :");
        int b = sc.nextInt();
        
        while(!(a >= 0 & a <=23)){
            System.out.print("a를 다시 입력하세요 : ");
            a = sc.nextInt();
        }
        while(!(b >= 0 & b <=59)){
            System.out.print("b를 다시 입력하세요 : ");
            b = sc.nextInt();
        }

        if((b-45) < 0){
            b = b + 60;
            a = a - 1;

            if(a < 0){
                a = 23;
            }
        }

        System.out.println(a+" "+(b-45));
    }
}
