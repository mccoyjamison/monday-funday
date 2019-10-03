let cars = [
  {
  make: 'BMW',
  model: '760i',
  year: 2019
},
{
  make: 'Chevy',
  model: 'Tahoe',
  year: 2016
},
{
  make: 'Toyola',
  model: 'Corolla',
  year: 2019
},
];

let carYear = cars.filter( (car) => {
  return car.year === 2019
} )

let displayData = cars.map ( (car) => {
  let result =  car
  result.display = car.year + ' ' + car.make + ' ' + car.model
  return result
})


//console.log( carYear );
console.log( displayData );