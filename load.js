function loadUsers () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( data => displayUsers(data));
}

function displayUsers (data) {
    const ul = document.querySelector('.user-list')
    for(const user of data) {
        const li = document.createElement('li');
        li.innerText = `${user.email}`
        ul.appendChild(li);
    }
 }