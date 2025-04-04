const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('', S => {
    console.log(check(S.trim()));
    rl.close();
});

function check(S) {
    let numOfVowels = 0;
    let numOfConsonants = 0;
    const vowels = "eyuioaEYUIOA";
    for (const s of S) {
        if (vowels.includes(s))
            numOfVowels++;
        else if (s !== ' ')
            numOfConsonants++;
    }
    return numOfVowels > numOfConsonants ? "Да" : (numOfVowels < numOfConsonants ? "Нет" : "Одинаково");
}