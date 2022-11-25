const word = 'HI THERE!!!!!!'
word.replace(/[^\w]/g, "").toLowerCase()

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    console.log('Anagram?: False')
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      console.log('Anagram?: False')
      return false
    }
  }

  console.log('Anagram?: True')
  return true
}

//helpers:
function buildCharMap(str) {
  const charMap = {}
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

anagrams('Threes Company', 'The Scream Pony')
//solution #2:
anagramsTwo('Threes Company', 'The Scream Pony')

function anagramsTwo(stringA, stringB) {
  if (cleanString(stringA) === cleanString(stringB)) {
    console.log('Anagram?: True')
    return true
  } else {
    console.log('Anagram?: False')
    return false
  }
  return
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
}
