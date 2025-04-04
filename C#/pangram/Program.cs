class Program{
    static void Main(){
        Output(Input());
    }

    static string Input(){
        string? sentence = Console.ReadLine();
        return sentence ?? "";
    }

    static void Output(string sentence){
        Console.Write(Check(sentence));
    }

    static bool Check(string sentence){
        Dictionary<char, int> letters = new Dictionary<char, int>();
        foreach(char s in sentence){
            if(!letters.ContainsKey(s)){
                letters[s] = 1;
            }
        }
        bool isPan = true;
        for(char c = 'a'; c <= 'z'; c++){
            if(!letters.ContainsKey(c)){
                Console.WriteLine($"There is no {c}");
                isPan = false;
            }
        }
        return isPan;
    }
}