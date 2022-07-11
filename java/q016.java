import java.util.Scanner;

// 주사위 세개 (백준 2480번)
public class q016{
    public static void main(String[]args){

        int a = (int)(Math.random()*6)+1;
        int b = (int)(Math.random()*6)+1;
        int c = (int)(Math.random()*6)+1;

        int reward = 0;

        if(a == b & a == c & b == c){
            reward = 10000 + a * 1000;
        }else if(a == b | b == c){
            reward = 1000 + b * 100;
        }else if(a == b | a == c){
            reward = 1000 + a * 100;
        }else if(a == c | b == c){
            reward = 1000 + c * 100;
        }else if(a != b & a != c & b != c){
            int max = a;

            if(max < b) max = b;
            if(max < c) max = c;

            reward = max * 100;
        }

        System.out.println("주사위 a : "+ a +", 주사위 b : " + b + ", 주사위 c : " + c);
        System.out.println(reward);
    }
}