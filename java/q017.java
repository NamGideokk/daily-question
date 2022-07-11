import java.util.Scanner;

// 사분면 고르기 (백준 14681번)
public class q017 {
    public static void main(String[] args){
        // 좌표 x, y가 있다.
        // x, y => 제1사분면
        // -x, y => 제2사분면
        // -x, -y => 제3사분면
        // x, -y => 제4사분면

        // Scanner sc = new Scanner(System.in);

        // int x = sc.nextInt();
        // int y = sc.nextInt();

        // 랜덤숫자로
        int dice = (int)(Math.random()*2) + 1;
        int dice2 = (int)(Math.random()*2) + 1;

        int x = 0;
        int y = 0;

        if(dice == 1){
            x = (int)(Math.random()*-1000);
        } else {
            x = (int)(Math.random()*1000);
        }

        if(dice2 == 1){
            y = (int)(Math.random()*-1000);
        } else {
            y = (int)(Math.random()*1000);
        }

        // 좌표 출력
        System.out.println("좌표값 (" + x + ", " + y +")");

        if(x > 0 & y > 0){
            System.out.println("제1사분면 입니다.");
        }else if(x < 0 & y > 0){
            System.out.println("제2사분면 입니다.");
        }else if(x < 0 & y < 0){
            System.out.println("제3사분면 입니다.");
        }else if(x > 0 & y < 0){
            System.out.println("제4사분면 입니다.");
        }

    }
}
