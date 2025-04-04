fun main() {
    val n = readLine()!!.toInt()
    repeat(n) {
        val num = readLine()!!.toInt()
        println(if (num % 100 < 60 && num / 100 < 24) "YES " else "NO ")
    }
}