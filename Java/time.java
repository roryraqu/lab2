import java.util.Scanner;

class main{
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        for (int i = 0; i < n; i++){
            int num = scanner.nextInt();
            System.out.printf(num % 100 < 60 && num / 100 < 24 ? "YES " : "NO "); 
        }
    }
}