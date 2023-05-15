function load () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then (data => load2(data))
}
function load2 (data) {
    console.log(data)
}