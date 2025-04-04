var readline = require('readline');
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('', function (sentence) {
    console.log(check(sentence.trim()));
    rl.close();
});
function check(sentence) {
    var letters = new Map();
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var ch = sentence_1[_i];
        letters.set(ch, (letters.get(ch) || 0) + 1);
    }
    var isPan = true;
    for (var code = 97; code <= 122; code++) {
        var c = String.fromCharCode(code);
        if (!letters.has(c) || letters.get(c) === 0) {
            console.log("There is no ".concat(c));
            isPan = false;
        }
    }
    return isPan;
}
