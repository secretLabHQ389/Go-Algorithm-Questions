const IntRev = x => {
  const charge = Math.sign(x)
  const string = x + ''
  const reversedString = string.split('').reverse()
  const reversedDigits = charge === - 1 ? reversedString.pop() : reversedString
  const reversed = reversedString.join('')

  const intP = parseInt(reversed)

  if (charge === -1) {
    console.log(-intP)
  } else {
    console.log(intP)
  }
  
  return intP
}
IntRev(-309)

//Another solution
