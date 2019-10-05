
try {
  // this is the code that will be handled if an error occurs

  var x = y
} catch (errorDetail) {
  //this block will run when the block of 'try' hits an error
  console.log(errorDetail.message)
  console.log(errorDetail.name)

}