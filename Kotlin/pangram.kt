fun main() {
    val sentence = input()
    output(sentence)
}

fun input(): String = readLine() ?: ""

fun output(sentence: String) {
    print(check(sentence))
}

fun check(sentence: String): Boolean {
    val letters = mutableMapOf<Char, Int>()
    
    for (s in sentence) {
        letters[s] = letters.getOrDefault(s, 0) + 1
    }
    
    var isPan = true
    for (c in 'a'..'z') {
        if (letters.getOrDefault(c, 0) == 0) {
            println("There is no $c")
            isPan = false
        }
    }
    return isPan
}