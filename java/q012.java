import java.util.Scanner;

public class q012 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        System.out.print("2자리의 정수를 입력하세요 : ");
        Double a = sc.nextDouble();

        // while(a < 10 | a > 99){
        //     System.out.print("2자리의 정수를 다시 입력하세요 : ");
        //     a = sc.nextInt();
        // }

        // while문, do-while문 조건식이 헷갈릴땐 ! 부정 연산자를 쓰자 (드모르간 법칙)
        while((a / 10) < 1 | (a / 10) >= 10){
            System.out.print("2자리의 정수를 다시 입력하세요 : ");
            a = sc.nextDouble();
        }

        System.out.println("변수 a의 값은 "+a+"가(이) 되었습니다.");
    }
}