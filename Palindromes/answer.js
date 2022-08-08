function reverse(str) {
  const reversed = str.split('').reverse().join('')
  if (str === reversed) {
    console.log('It is a palindrome.')
  } else {
    console.log('It is not a palindrome.')
  }
  return
}
reverse('racecar')
