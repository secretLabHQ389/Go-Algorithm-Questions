//most commonly used char in string

function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  console.log(maxChar)
  return maxChar
}

maxChar('The mild tempered horse ate in the meadow.')


// function maxChar(str) {
//     var chars = []
//     for (let char of str) {
//         chars[char] += chars[char] || 1
//     }
//     for (let char in chars) {
//         if (char.valueOf() === Math.max(chars)) {
//             return char
//         }
//     }
// }


// function maxChar(str) {
//     var chars = []
//     for (let char of str) {
//         chars.push(char)
//     }
//     var counts = []
//     let chrCount = 0
//
//     const strA = str.split('')
//
//     for (let char of strA) {
//         // for (let item of chars) {
//         //     if (char === item) {
//         //         chrCount++
//         //     }
//         // }
//         strA.reduce((prev, curr) => { prev == curr && chrCount++ })
//         console.log(chrCount)
//         //counts.push(chrCount)
//     }
//     //return chrCount
// }
//
// maxChar('Hello')
