import java.util.Random;

public class q041 {

    // Q16
    static void spira(int n){

    // 내 풀이
        for(int i = 1; i <= n; i++){

            // 공백 출력
            for(int j = 1; j <= n - i; j++){
                System.out.print(" ");
            }

            // * 출력
            for(int j = 1 ; j <= i * 2 - 1; j++){
                System.out.print("*");
            }

            // 공백 출력
            for(int j = 1; j <= n - i; j++){
                System.out.print(" ");
            }

            System.out.println();
        }
    
    
    // 답안
    // for (int i = 1; i <= n; i++) { 					// i행 (i = 1, 2, … ,n)
    //     for (int j = 1; j <= n - i + 1; j++) 		// n-i+1개의 ' '를 나타냄
    //     System.out.print(' ');
    //     for (int j = 1; j <= (i - 1) * 2 + 1; j++)
    //     System.out.print('*');
    //     System.out.println();
    // }
}

    // Q17
    static void npira(int n){
        for(int i = 1; i <= n; i++){

            // 공백 출력
            for(int j = 1; j <= n - i; j++){
                System.out.print(" ");
            }

            // * 출력
            for(int j = 1 ; j <= i * 2 - 1; j++){
                System.out.print(i%10);
            }

            // 공백 출력
            for(int j = 1; j <= n - i; j++){
                System.out.print(" ");
            }

            System.out.println();
        }
    }
    
    public static void main(String[] args){

        spira(5);
        npira(5);
    }
}
