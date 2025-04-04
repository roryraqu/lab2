#include <iostream>
#include <string>

#define YES 1
#define NO -1
#define EQ 0

void input(std::string* S);
void output(std::string S);
int check(std::string S);
bool isVowel(char S);

int main(){
    std::string S;
    input(&S);
    output(S);
}

void input(std::string* S){
    getline(std::cin, *S);
}

void output(std::string S){
    int result = check(S);
    std::cout << (result == YES ? "Да" : (result == NO ? "Нет" : "Одинаково"));
}

int check(std::string S){
    int numOfVowels = 0;
    int numOfConsonants = 0;
    int numOfOthers = 0;
    for (char s : S){
        isVowel(s) ? numOfVowels++ : (s != ' ' ? numOfConsonants++ : numOfOthers++); 
    }
    return numOfVowels > numOfConsonants ? YES : (numOfVowels < numOfConsonants ? NO : EQ);
}

bool isVowel(char s){
    std::string vowels = "aeiouyAEIOUY";
    bool isVow = false;
    for (char v : vowels){
        if (s == v) isVow = true;
    }
    return isVow;
}