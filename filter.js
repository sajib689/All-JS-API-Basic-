const numbers = [12, 5, 23, 45,11, 18,  9,  55, 61, 1]

const bigNums = numbers.filter(n => n > 20)
const divison = numbers.find(d => d % 2 === 0)
console.log(bigNums)

const products = [
    {id: 1, name: 'John', age:45},
    {id: 2, name: 'Mohasin', age:32},
    {id: 3, name: 'Runa', age:65},
    {id: 4, name: 'Musa', age:18}
]
 const senior = products.filter( p => p.age > 40)
 console.log(senior)
 console.log(divison)