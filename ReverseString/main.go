package main

func main() {
  str := "ceremony"
  chars := []rune(str)
  var result []rune
  for i := len(chars) - 1; i >= 0; i-- {
      result = append(result, chars[i])
  }
  println(string(result))
}
