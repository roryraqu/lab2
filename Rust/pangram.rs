use std::collections::HashMap;
use std::io;

fn main() {
    let mut sentence = String::new();
    input(&mut sentence);
    output(&sentence);
}

fn input(sentence: &mut String) {
    let _ = io::stdin().read_line(sentence);
    *sentence = sentence.to_string();
}

fn output(sentence: &str) {
    print!("{}", check(sentence));
}

fn check(sentence: &str) -> bool {
    let mut letters: HashMap<char, i32> = HashMap::new();
    for s in sentence.chars() {
        *letters.entry(s).or_insert(0) += 1;
    }
    
    let mut is_pan = true;
    for c in 'a'..'z' {
        let c = c as char;
        if *letters.get(&c).unwrap_or(&0) == 0 {
            println!("There is no {}", c);
            is_pan = false;
        }
    }
    is_pan
}