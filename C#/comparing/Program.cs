class Program {
    static void Main(){
        Output(Input());
    }

    static string Input(){
        string? S = Console.ReadLine();
        return S ?? "";
    }

    static void Output(string S){
        int result = Check(S);
        Console.Write(result == 1 ? "Да" : (result == -1 ? "Нет" : "Одинаково"));
    }

    static int Check(string S){
        int numOfVowels = 0;
        int numOfConsonants = 0;
        foreach (char s in S) {
            if (IsVowel(s)) {
                numOfVowels++;
            }
            else if (s != ' ') {
                numOfConsonants++;
            }
        }
        return numOfVowels > numOfConsonants ? 1 : (numOfVowels < numOfConsonants ? -1 : 0);
    }

    static bool IsVowel(char s){
        string vowels = "eyuioaEYUIOA";
        bool isVow = false;
        foreach (char v in vowels) {
            if (s == v) isVow = true;
        }
        return isVow;
    }
}