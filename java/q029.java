import java.util.Scanner;

// 별 찍기 - 1 (백준 2438번)
public class q029 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();

        for(int i = 1; i <= a; i++){
            for(int j = 1; j < i + 1; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
