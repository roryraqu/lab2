class Program{
    static void Main(){
        int n = Convert.ToInt32(Console.ReadLine());
        for (int i = 0; i < n; i++){
            int num = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(num % 100 < 60 && num / 100 < 24 ? "YES" : "NO");
        }
    }
}