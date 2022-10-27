package main

import (
  "fmt"
  "strings"
)

//convert to finding longest substring made of same char
//https://www.geeksforgeeks.org/program-to-find-the-length-of-the-longest-substring-without-repeating-characters-in-golang/
//check if a key exits in a map with the ok syntax:
//https://akashmittal.com/golang-check-key-exists-map/
//compare two maps:
//https://stackoverflow.com/questions/52582040/compare-two-maps-in-golang


func main() {
  str := "Hello globe"
  charMap := make(map[string]integer{})

  //iterate over a map, for the following:
  func printMap(c map[string]string) {
    for key, value := range c {
      fmt.Println("Hex code for", color, "is", hex)
    }
  }
  //add to a map:
  if _, ok := charMap[char]; ok {
    charMap[char] = charMap[char] + 1 //confirm this adds to its value
  } else {
    charMap[char] = 1
  }


  //###

  //
  &max := 0
  &maxChar:= ''

  //map over str
  countChars := func(r rune) rune {
    if (charMap[r]) {
      charMap[r]++
    } else {
      charMap[r] = 1
    }
  }

  strings.Map(countChars, str)

  //find highest value of char count
  findMost := func(r rune) rune {
    if r > max {
      *max = r
      *maxChar = r
    }
  }

  fmt.Println("Most common character:", maxChar)

}
