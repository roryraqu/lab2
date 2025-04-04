use std::io;

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).unwrap();
    let n: i32 = n.trim().parse().unwrap();
    
    for _ in 0..n {
        let mut num = String::new();
        io::stdin().read_line(&mut num).unwrap();
        let num: i32 = num.trim().parse().unwrap();
        print!("{} ", if num % 100 < 60 && num / 100 < 24 { "YES" } else { "NO" });
    }
}