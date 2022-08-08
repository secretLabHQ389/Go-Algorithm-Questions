package main

import "fmt"

func main() {
  str := "racecar"
  chars := []rune(str)
  var result []rune
  for i := len(chars) - 1; i >= 0; i-- {
      result = append(result, chars[i])
  }
  reversed := string(result)
  if str == reversed {
    fmt.Println("It is a palindrome")
  } else {
    fmt.Println("It is not a palindrome")
  }
}
