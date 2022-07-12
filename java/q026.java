// 왼쪽 아래가 직각인 이등변 삼각형 그리기

// *
// **
// ***

import java.util.Scanner;

public class q026 {

    // Q15
    static void triangleLB(int n){
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    static void triangleLU(int n){
        for(int i = n; i >= 1; i--){
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    static void triangleRU(int n){
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i - 1; j++){
                System.out.print(" ");
            }
            for(int j = 1; j <= n - i + 1; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
    static void triangleRB(int n){
        
    }

    public static void main(String[] args){
        // Scanner sc = new Scanner(System.in);

        // System.out.print("몇 단의 삼각형을 만드시겠습니까? : ");
        // int a = sc.nextInt();

        // for(int i = 1; i <= a; i++){
        //     for(int j = 1; j <= i; j++){
        //         System.out.print("*");
        //     }
        //     System.out.println();
        // }

        triangleLB(5);
        System.out.println("=================");
        triangleLU(3);
        System.out.println("=================");
        triangleRU(4);
    }
}
