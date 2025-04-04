package main

import(
	"fmt"
)

func main(){
	var n int = 0
	fmt.Scanf("%d", &n)
	for i := 0; i < n; i++{
		var num int = 0
		fmt.Scanf("%d", &num)
		if num % 100 < 60 && num / 100 < 24{
			fmt.Printf("YES ")
		} else{
			fmt.Printf("NO ")
		}
	}
}