const val YES = 1
const val NO = -1
const val EQ = 0

fun main() {
    val S = input()
    output(S)
}

fun input(): String = readLine() ?: ""

fun output(S: String) {
    val result = check(S)
    print(
        when (result) {
            YES -> "Да"
            NO -> "Нет"
            else -> "Одинаково"
        }
    )
}

fun check(S: String): Int {
    var numOfVowels = 0
    var numOfConsonants = 0
    
    for (s in S) {
        when {
            isVowel(s) -> numOfVowels++
            s != ' ' -> numOfConsonants++
        }
    }
    
    return when {
        numOfVowels > numOfConsonants -> YES
        numOfVowels < numOfConsonants -> NO
        else -> EQ
    }
}

fun isVowel(s: Char): Boolean = s in "aeiouyAEIOUY"