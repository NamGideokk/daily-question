public class q004 {
    
    // 최대값을 구하는 메소드
    static int max4(int a, int b, int c, int d){
        int max = a;

        if(max < b) max = b;
        if(max < c) max = c;
        if(max < d) max = d;

        return max;
    }

    // 최소값을 구하는 메소드
    static int min3(int a, int b, int c){
        int min = a;

        if(min > b) min = b;
        if(min > c) min = c;

        return min;
    }

    // 중앙값을 구하는 메소드
    static int med3(int a, int b, int c){

        // b a c, c a b, a b c, c b a, a c b, b c a
        if(a >= b){
            if(b >= c){
                return b;
            } else if (a <= c){
                return a;
            } else {
                return c;
            }
        } else if(a > c){
            return a;
        } else if (b > c){
            return c;
        } else {
            return b;
        }
    }

    
    public static void main (String[] args){

        System.out.println("최대값 : " + max4(1,10,9, -2));
        System.out.println("최소값 : " + min3(1,10,9));
        System.out.println("중앙값 : " + med3(12,2,7));

    }
}
