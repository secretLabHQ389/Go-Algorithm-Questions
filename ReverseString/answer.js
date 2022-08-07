function reverse(str) {
  return str.split('').reverse().join('')
}
module.exports = reverse

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '')
}
module.exports = reverse
