const user = { id: 1, name: 'Sajo', email: 'sajo@gmail.com'}
console.log(user)
const s = JSON.stringify(user)
console.log(s)

const js = {
    bioData: {
        name: 'Kuddus',
        Worker: 2023,
        district: 'Jashore',
        country: 'Bangladesh'
    },
    religion: 'Islam',
    status: 'Married'
}

const str = JSON.stringify(js)
console.log(str)
const objJs = JSON.parse(str)
console.log(objJs)