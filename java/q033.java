// A+B - 4 (백준 10951번)
// 입력받는 값이 있는지 없는지 확인하여 프로그램을 종료 시키는듯?
// hasNext(), hasNextInt() 를 사용함.
import java.util.Scanner;

public class q033 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        while(sc.hasNextInt()){
            int a = sc.nextInt();
            int b = sc.nextInt();

            System.out.println(a+b);
        }
    }
}
