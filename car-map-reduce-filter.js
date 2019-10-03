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

let chevyCars = cars.map ( (chevys) => {
  return chevys.make === 'Chevy'
})


console.log( carYear );
console.log( chevyCars );