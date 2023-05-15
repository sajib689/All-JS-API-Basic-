const arr = [1, 5, 7, 9]

const result = arr.map(n => n+1)
console.log(result)

const arr2 = [33, 50, 79, 78, 90, 101, 30]
const result2 = arr2.filter(n2 => n2/10 === 0)
console.log(result2)
const peoples = [
    { name: 'Mina', age:20},
    { name: 'Rina', age:15},
    { name: 'Susrita', age:22}
]
const result3 = peoples.map(n3 => n3.age)
console.log(result3)
function add (a, b){
    return a + b
}
const result4 = result3.reduce(add, 0)
console.log(result4)

let data = {
    location: [
     {
        latitude: '34.5, 37.8',
        longitude: '98.7, 58.7',
        city: 'Hydrabad',
        country: 'India'
    }
    ]
}
const result5 = data.location.map(n4 => n4.country)
console.log(result5)
const student = {
    name: 'Fredie',
    age: 20
}
console.log(student.age)