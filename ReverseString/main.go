package main

import "fmt"

func main() {
  str := "ceremony"
  chars := []rune(str)
  var result []rune
  for i := len(chars) - 1; i >= 0; i-- {
      result = append(result, chars[i])
  }
  fmt.Println(string(result))
}
