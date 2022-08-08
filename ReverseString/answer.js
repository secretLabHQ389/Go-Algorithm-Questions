function reverse(str) {
  return str.split('').reverse().join('')
}
module.exports = reverse

// function reverse(str) {
//   //node inspect answer.js
//   //debugger
//   return str.split('').reduce((reversed, character) => character + reversed, '')
// }
// reverse('goal')

// function reverseLoop(str) {
//   const arr = str.split(',')
//   let reversed = []
//   for (i = arr; i < arr.length; i--) {
//     reversed = reversed.push(i)
//     console.log(reversed)
//     //debugger
//     return
//   }
//   console.log(reversed.join(''))
//   return
// }
// reverseLoop('laggy')

module.exports = reverseLoop
