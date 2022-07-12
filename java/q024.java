import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.IOException;

// 빠른 A+B (백준 15552번)
// Java를 사용하고 있다면, Scanner와 System.out.println 대신 
// BufferedReader와 BufferedWriter를 사용할 수 있다. 
// BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.
public class q024 {
//     public static void main(String[] args) throws IOException{
//         BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
//         BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

//         // 문자열 입력?
//         // String a = bf.readLine();
//         int times = Integer.parseInt(bf.readLine());
//         int a = 0; 
//         int b = 0; 

//         for(int i = 1; i <= times; i++){
//             a = Integer.parseInt(bf.readLine());
//             b = Integer.parseInt(bf.readLine());

//             bw.write((a+b) + "\n"); // 버퍼에 있는 값 전부 출력
//         }
        
//         bw.flush(); // 남아있는 데이터를 모두 출력 시킴
//         bw.close(); // 스트림 닫기    
//     }
// }

public static void main(String[] args) throws Exception {
 
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    StringBuilder sb = new StringBuilder();

    for (int i = 0; i < N; i++) {		
        String str = br.readLine();
        int target = str.indexOf(" ");
        int result = Integer.parseInt(str.substring(0,target)) + Integer.parseInt(str.substring(target + 1));		
        sb.append(result+"\n");
    }
    
    br.close();
    System.out.print(sb);
}
}