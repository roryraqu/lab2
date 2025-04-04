const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('', (S: string) => {
    console.log(check(S.trim()));
    rl.close();
});
  
function check(S: string): string {
    let numOfVowels: number = 0;
    let numOfConsonants: number = 0;
    const vowels: string = "eyuioaEYUIOA";
    for (const c of S) {
        if (vowels.includes(c))
            numOfVowels++;
        else if (c !== ' ')
            numOfConsonants++;
    }
    return numOfVowels > numOfConsonants ? "Да" : (numOfVowels < numOfConsonants ? "Нет" : "Одинаково");
}