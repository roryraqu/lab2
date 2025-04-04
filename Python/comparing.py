YES = 1
NO = -1
EQ = 0

def main():
    S = [""]
    myInput(S)
    output(S)

def myInput(S):
    S[0] = input()

def output(S):
    result = check(S[0])
    print("Да" if result == YES else ("Нет" if result == NO else "Одинаково"), end='')

def check(S):
    numOfVowels = 0
    numOfConsonants = 0
    numOfOthers = 0
    for char in S:
        if isVowel(char):
            numOfVowels += 1
        else:
            if char != ' ':
                numOfConsonants += 1
            else:
                numOfOthers += 1
    return YES if numOfVowels > numOfConsonants else (NO if numOfVowels < numOfConsonants else EQ)

def isVowel(s):
    vowels = "aeiouyAEIOUY"
    return s in vowels

main()