//"JavaScript standard library"
function capitalise(str) {
  const words = []
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  console.log(words.join(" "))
  return words.join(" ")
}

capitalise("Here this all caps.")
//solution #2:
capitaliseTwo("Here this all caps.")

function capitaliseTwo(str) {
  let result = str[0].toUpperCase()
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  console.log('Result: ', result)
  return result
}
