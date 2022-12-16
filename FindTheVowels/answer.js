function vowelsIterative(str) {
  let count = 0
  const vowels = "aeiou"
  for (let char of str.toLowerCase()) {
    //includes also works on arrays
    if (vowels.includes(char)) {
      count++
    }
  }
  console.log('Vowel count iterative: ', count)
  return count
}

function vowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi).length !== 0 ? str.match(/[aeiou]/gi).length : 0
  console.log('Matches found regex: ', matches)
}

vowelsIterative('How many do I have?')
vowelsRegex('How many do I have?')
