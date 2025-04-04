func input(_ sentence: inout String) {
    if let line = readLine() {
        sentence = line
    }
}

func output(_ sentence: String) {
    print(check(sentence))
}

func check(_ sentence: String) -> Bool {
    var letters: [Character: Int] = [:]
    for s in sentence {
        letters[s, default: 0] += 1
    }
    var isPan = true
    for ascii in 97...122 {
        let c = Character(UnicodeScalar(ascii)!)
        if letters[c, default: 0] == 0 {
            print("There is no \(c)")
            isPan = false
        }
    }
    return isPan
}

var sentence = ""
input(&sentence)
output(sentence)