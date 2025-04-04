var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('', function (S) {
    console.log(check(S.trim()));
    rl.close();
});
function check(S) {
    var numOfVowels = 0;
    var numOfConsonants = 0;
    var vowels = "eyuioaEYUIOA";
    for (var _i = 0, S_1 = S; _i < S_1.length; _i++) {
        var c = S_1[_i];
        if (vowels.includes(c))
            numOfVowels++;
        else if (c !== ' ')
            numOfConsonants++;
    }
    return numOfVowels > numOfConsonants ? "Да" : (numOfVowels < numOfConsonants ? "Нет" : "Одинаково");
}
