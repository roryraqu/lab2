"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('', function (line) {
    var n = parseInt(line);
    processNumbers(0, n);
});
function processNumbers(count, n) {
    if (count >= n) {
        rl.close();
        return;
    }
    rl.question('', function (line) {
        var num = parseInt(line);
        console.log((num % 100 < 60 && Math.floor(num / 100) < 24) ? "YES" : "NO");
        processNumbers(count + 1, n);
    });
}
