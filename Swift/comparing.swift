let YES = 1
let NO = -1
let EQ = 0

func input(_ S: inout String) {
    if let line = readLine() {
        S = line
    }
}

func output(_ S: String) {
    let result = check(S)
    print(result == YES ? "Да" : (result == NO ? "Нет" : "Одинаково"))
}

func check(_ S: String) -> Int {
    var numOfVowels = 0
    var numOfConsonants = 0
    var numOfOthers = 0
    for s in S {
        if isVowel(s) {
            numOfVowels += 1
        } else {
            if s != " " {
                numOfConsonants += 1
            } else {
                numOfOthers += 1
            }
        }
    }
    return numOfVowels > numOfConsonants ? YES : (numOfVowels < numOfConsonants ? NO : EQ)
}

func isVowel(_ s: Character) -> Bool {
    let vowels = "aeiouyAEIOUY"
    return vowels.contains(s)
}

var S = ""
input(&S)
output(S)