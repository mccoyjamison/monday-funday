addOne = function (numberToAddTo) {
  if (numberToAddTo === undefined) {
    throw new Error('You must provide a number to add to')
  }
  return numberToAddTo + 1
}

try {
  let result = addOne()
  console.log(result)
} catch(errorDetail) {
  console.log(errorDetail.message)
}