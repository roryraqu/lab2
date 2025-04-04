#include <iostream>

int main(){
    int n = 0;
    std::cin >> n;
    for (int i = 0; i < n; i++){
        int num = 0;
        std::cin >> num;
        std::cout << ((num % 100 < 60 && num / 100 < 24) ? "YES " : "NO ");
    }
}