const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('', sentence => {
    console.log(check(sentence.trim()));
    rl.close();
});

function check(sentence) {
    const counts = {};
    for (const ch of sentence) {
        counts[ch] = (counts[ch] || 0) + 1;
    }
    let isPan = true;
    for (let code = 97; code <= 122; code++) {
        const letter = String.fromCharCode(code);
        if (!counts[letter]) {
            console.log("There is no " + letter);
            isPan = false;
        }
    }
    return isPan;
}