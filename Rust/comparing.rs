use std::io;

const YES: i32 = 1;
const NO: i32 = -1;
const EQ: i32 = 0;

fn main() {
    let s = input();
    output(&s);
}

fn input() -> String {
    let mut s = String::new();
    let _ = io::stdin().read_line(&mut s);
    s.to_string()
}

fn output(s: &str) {
    let result = check(s);
    match result {
        YES => print!("Да"),
        NO => print!("Нет"),
        _ => print!("Одинаково"),
    }
}

fn check(s: &str) -> i32 {
    let mut num_of_vowels = 0;
    let mut num_of_consonants = 0;
    
    for c in s.chars() {
        if is_vowel(c) {
            num_of_vowels += 1;
        } else if c != ' ' {
            num_of_consonants += 1;
        }
    }
    
    if num_of_vowels > num_of_consonants {
        YES
    } else if num_of_vowels < num_of_consonants {
        NO
    } else {
        EQ
    }
}

fn is_vowel(c: char) -> bool {
    match c.to_ascii_lowercase() {
        'a' | 'e' | 'i' | 'o' | 'u' | 'y' => true,
        _ => false,
    }
}