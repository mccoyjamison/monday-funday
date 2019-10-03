let ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let ableToBuyLotto = ages.filter( (age) => {
  return age >= 18
}) 

let ageObjs = ableToBuyLotto.map ( (age) => {
  let result = {}
  result.age = age 
  result.grown = age + ' ' + 'is old enough to buy lottery tickets!'
  return result
})

console.log(ageObjs)