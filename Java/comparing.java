import java.util.Scanner;

class Main{
    public static void main(String args[]){
        String S = input();
        output(S);
    }

    public static String input(){
        Scanner scanner = new Scanner(System.in);
        return scanner.nextLine();
    }

    public static void output(String S){
        int result = check(S);
        System.out.printf(result == 1 ? "Да" : (result == -1 ? "Нет" : "Одинаково"));
    }

    public static int check(String S){
        int numOfVowels = 0;
        int numOfConsonants = 0;
        for(char s : S.toCharArray()){
            if (isVowel(s)){
                numOfVowels++;
            } 
            else if (s != ' '){
                numOfConsonants++;
            }
        }
        return numOfVowels > numOfConsonants ? 1 : (numOfVowels < numOfConsonants ? -1 : 0);
    }
    
    public static boolean isVowel(char s){
        String vowels = "eyuioaEYUIOA";
        boolean isVow = false;
        for (char v : vowels.toCharArray()){
            if (s == v) isVow = true;
        }
        return isVow;
    }
}