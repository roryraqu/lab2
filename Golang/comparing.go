package main

import (
	"fmt"
	"bufio"
	"os"
)

func main(){
	var S string = input()
	output(S)
}

func input() string{
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	return scanner.Text()
}

func output(S string){
	var result int = check(S)
	if result == 1{
		fmt.Printf("Да")
	} else if result == -1{
		fmt.Printf("Нет")
	} else if result == 0{
		fmt.Printf("Одинаково")
	}
}

func check(S string) int{
	var numOfVowels int = 0
	var numOfConsonants int = 0
	for i := 0; i < len(S); i++{
		if isVowel(S[i]){
			numOfVowels++
		} else if S[i] != ' '{
			numOfConsonants++
		}
	}
	
	var result int = 0
	if numOfVowels > numOfConsonants{
		result = 1 
	} else if numOfVowels < numOfConsonants{
		result = -1
	} else{
		result = 0
	}
	return result
}

func isVowel(s byte) bool{
	var isVow bool = false
	var vowels string = "eyuioaEYUIOA"
	for i := 0; i < len(vowels); i++{
		if s == vowels[i]{
			isVow = true;
		}
	}
	return isVow
}