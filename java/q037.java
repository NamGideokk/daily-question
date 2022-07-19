// 숫자의 개수 (백준 2577번)

// 내 생각(풀이)
// 1. 각 수를 곱한값을 담는 변수를 만들고, 숫자를 배열로 쪼갠다?, 문자열에서 글자 하나하나 검사?
// 2. 각 숫자를 검사하면서 count 값 변수도 만든다

import java.util.Scanner;

public class q037{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        int result = a * b * c;
        String str = Integer.toString(result);
        
        for(int i = 0; i < 10; i++){
            int count = 0;
            for(int j = 0; j < str.length(); j++){
                if((str.charAt(j) - '0') == i){
                    count++;
                }
            }
            System.out.println(count);
        }
    }
}