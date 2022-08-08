function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  if (str === reversed) {
    console.log('It is a palindrome.')
  } else {
    console.log('It is not a palindrome.')
  }
  return
}

//another solution
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return ((char === str[str.length - i - 1] === true) ? console.log('It is a palindrome.') : console.log('It is not a palindrome.'))
//   })
// }

palindrome('racecars')
