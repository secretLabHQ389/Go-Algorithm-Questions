package main

import (
  "fmt"
  "math"
  "strconv"
  "strings"
)

func main() {
  number1 := -5309
  charge := math.Signbit(float64(number1))
  numString := strconv.Itoa(number1)

  chars := []rune(numString)
  var result []rune
  for i := len(chars) - 1; i >= 0; i-- {
      result = append(result, chars[i])
  }

  reversedString := string(result)

  if charge == true {
    fmt.Println("-",strings.TrimSuffix(reversedString, "-"))
  } else {
    fmt.Println(reversedString)
  }
}
