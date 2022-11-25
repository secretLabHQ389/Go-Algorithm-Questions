function chunk(array, size) {
  //JS closure variable:
  const chunked = []
  for (let element of array) {
    const last = chunked[chunked.length - 1]
    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      //continues a falsy for each remaining
      //item after each set of size is completed:
      //several other ways of doing this.
      last.push(element)
    }
  }
  console.log('chunked: ', chunked)
  return chunked
}

chunk([1,4,5,6,33,2,4,5,6], 3)


//Slice answer:

const letters = ['a','b','c','d','e','f']
letters.slice(0, 3)

function chunkSlice(array, size) {
  //JS closure variable:
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  console.log('chunked: ', chunked)
  return chunked
}

chunkSlice([1,4,5,6,33,2,4,5,6], 3)
