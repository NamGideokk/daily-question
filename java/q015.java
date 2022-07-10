import java.util.Scanner;

public class q015 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("a (0 ~ 23) :");
        int a = sc.nextInt();
        System.out.print("b (0 ~ 59) :");
        int b = sc.nextInt();
        System.out.print("c (0 ~ 1000) : ");
        int c = sc.nextInt();
        
        while(!(a >= 0 & a <=23)){
            System.out.print("a를 다시 입력하세요 : ");
            a = sc.nextInt();
        }
        while(!(b >= 0 & b <=59)){
            System.out.print("b를 다시 입력하세요 : ");
            b = sc.nextInt();
        }
        while(!(c >= 0 & c <= 1000)){
            System.out.print("c를 다시 입력하세요 : ");
            b = sc.nextInt();
        }

        int hour = a + ((b + c) / 60);
            if(hour >= 24){
                hour = hour - 24;
            }
        int minute = (b + c) % 60;
        
        System.out.println(hour + " " + minute);
        
        // if(minute > 60){
        //     minute = minute % 60;
        //     hour = hour + (minute / 60);

        //     if(hour >= 24){
        //         hour = hour - 24;
        //     }
        // } else if(minute == 60){
        //     minute = 0;
        //     hour = hour + 1;
        // }



        // int minute = b + c;

        // int minuteH = (b + c) / 60;
        // int minuteM = (b + c) % 60;
        // int hour = a + minuteH;

        // if ((a+minuteH) > 23){
        //     hour = (a + minuteH) % 23;
        // }
        // if(minute > 60){
        //     minute -= 60;
        //     hour = a + ((b + c) % 60);
        // }
        // if(minute == 60){
        //     minute = 0;
        //     hour = hour++;
        //     if(hour)
        // }
        
        // System.out.println(hour + " " + minute);
    }
}
