const numbers = [12, 90, 60, 88];
let out = [];
const half = numbers.map(n => n/2)
const final = out.push(half);
console.log(final);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 55000},
    {id: 3, name: 'watch', price: 47000},
    {id: 4, name: 'tablet', price: 214500},
]

const item = products.map( product => product.name );
console.log( item);