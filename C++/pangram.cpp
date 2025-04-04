#include <iostream>
#include <string>
#include <map>

void input(std::string* S);
bool check(std::string sentence);
void output(std::string sentence);

int main(){
    std::string sentence;
    input(&sentence);
    output(sentence);
}

void input(std::string* sentence){
    getline(std::cin, *sentence);
}

void output(std::string sentence){
    std::cout << std::boolalpha << check(sentence);
}

bool check(std::string sentence){
    std::map <char, int> letters;
    for (char s : sentence){
        letters[s]++; 
    }
    bool isPan = true;
    for(char c = 97; c <= 122; c++){
        if(letters[c] == 0){
            std::cout << "There is no " << c << std::endl;
            isPan = false;
        }
    }
    return isPan;
}