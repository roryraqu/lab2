import * as readline from 'readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('', (line: string) => {
    const n: number = parseInt(line);
    processNumbers(0, n);
});

function processNumbers(count: number, n: number): void {
    if (count >= n) {
        rl.close();
        return;
    }
    rl.question('', (line: string) => {
        const num: number = parseInt(line);
        console.log((num % 100 < 60 && Math.floor(num / 100) < 24) ? "YES" : "NO");
        processNumbers(count + 1, n);
    });
}