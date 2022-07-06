public class q002 {
    
    public static void main(String[] args){
        int dan = 3;
        int i = 1;
        int result = 0;

        do{
            result = dan * i;
            if(i % 4 ==0){
                i++;
            }
            System.out.println(dan + " * " + i + " = " + result);
            i++;
        }while(i <= 9);
    }
}
