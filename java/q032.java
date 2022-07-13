//A+B - 5 (백준 10952번)
import java.util.Scanner;

public class q032 {
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		int A = sc.nextInt();
		int B = sc.nextInt();
		
		while(A != 0 && B!= 0) {
			System.out.println(A+B);
			A = sc.nextInt();
			B = sc.nextInt();
		}
		
	}
}