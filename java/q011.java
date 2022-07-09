import java.util.Scanner;

public class q011 {
    // 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("년도 : ");
        int year = sc.nextInt();

        if(year % 4 == 0 && year % 100 != 0 | year % 400 == 0){
            System.out.println(1);
        } else System.out.println(0);
    }
}
