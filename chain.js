const users = [ {id: 1, name: 'abul', job: 'doctor'}]

console.log(users[0].job);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Mia', job: 'Doctor'},
        {id: 2, name: 'Kuddus', job: 'Farmar'}
    ]
}
console.log(data.data[0].name);

const user = {
    id: 5001,
    name: 'Ali Mia',
    adress: {
        street: {
            first: '35/A Kocukhat lane',
            second: 'first floor',
            third:  'right side'
        },
        postOffice: 'Dhaka',
        city: 'Jashore'
    }
}
console.log(user.adress.postOffice)