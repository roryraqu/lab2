package main

import(
	"fmt"
	"os"
	"bufio"
)

func main(){
	var sentence string = input()
	output(sentence)
}

func input() string{
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	return scanner.Text()
}

func output(sentence string){
	var result bool = check(sentence)
	fmt.Printf("%t", result)
}

func check(sentence string) bool{
	var letters map[byte]int = make(map[byte]int)
	for i := 0; i < len(sentence); i++{
		letters[sentence[i]]++
	}
	var c byte = 97
	var isPan bool = true
	for ; c <= 122; c++{
		if letters[c] == 0{
			fmt.Printf("There is no %c\n", c)
			isPan = false
		}
	}
	return isPan
}