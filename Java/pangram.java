import java.util.Scanner;
import java.util.HashMap;

class Main{
    public static void main(String args[]){
        String sentence = input();
        output(sentence);
    }

    public static String input(){
        Scanner scanner =  new Scanner(System.in);
        return scanner.nextLine();
    }

    public static void output(String sentence){
        System.out.print(check(sentence));
    }

    public static boolean check(String sentence){
        HashMap<Character, Integer> letters = new HashMap<>();
        for(int i = 0; i < sentence.length(); i++){
            letters.put(sentence.charAt(i), 1);
        }
        boolean isPan = true;
        for (char c = 97; c <= 122; c++){
            if (letters.get(c) == null){
            System.out.println("There is no " + c);
            isPan = false;
            }
        }
        return isPan;
    }
}