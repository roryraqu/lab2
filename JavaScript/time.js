const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let firstLine = true;
let n = 0;
rl.on('line', line => {
    if (firstLine) {
        n = parseInt(line);
        firstLine = false;
    } else {
        const num = parseInt(line);
        process.stdout.write((num % 100 < 60 && Math.floor(num / 100) < 24) ? "YES\n" : "NO\n");
        n--;
        if (n === 0) rl.close();
    }
});