// 더하기 사이클 (백준 1110번)
import java.util.Scanner;

public class q034 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int copy = a;
        int count = 0;

        while(a < 0 | a > 99){
            System.out.print("0 <= a >= 99 : ");
            a = sc.nextInt();
        }

        do{
            a = ((a % 10) * 10) + (((a / 10) + (a % 10)) % 10);
            count++;
            
            if(copy == a){
                break;
            }
        }while(copy != a);

        System.out.println(count);
    }
}