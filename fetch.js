
function loadData () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then (json => console.log(json))
}