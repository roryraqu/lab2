const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('', (sentence: string) => {
    console.log(check(sentence.trim()));
    rl.close();
});

function check(sentence: string): boolean {
    const letters: Map<string, number> = new Map();
    for (const ch of sentence) {
        letters.set(ch, (letters.get(ch) || 0) + 1);
    }
    let isPan: boolean = true;
    for (let code = 97; code <= 122; code++) {
        const c: string = String.fromCharCode(code);
        if (!letters.has(c) || letters.get(c) === 0) {
            console.log(`There is no ${c}`);
            isPan = false;
        }
    }
    return isPan;
}