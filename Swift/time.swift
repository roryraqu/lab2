if let line = readLine(), let n = Int(line) {
    for _ in 0..<n {
        if let numLine = readLine(), let num = Int(numLine) {
            let result = (num % 100 < 60 && num / 100 < 24) ? "YES" : "NO"
            print(result, terminator: "\n")
        }
    }
}