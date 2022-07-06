public class q003 {

    static class List {
        String id;
        String password;

        public List(String id, String password){
            this.id = id;
            this.password = password;
        }
    }

    public static void change(String id){
        id = "test3";
        // void. return이 없다.
    }

    public static void main(String[] args){
        List[] list = new List[2];
        list[0] = new List("test1", "test1");
        list[1] = new List("test2", "test2");
        
        for(int i = 0; i <list.length; i++){
            change(list[i].id);

            list[i].password = "test3";
        }

        for(int i = 0; i < list.length; i++){
            System.out.println("id : " + list[i].id);
            System.out.println("password : " + list[i].password);
        }
    }
    
}

// list[0] = id: "test1", password: "test1"
// list[0] = id: "test2", password: "test2"