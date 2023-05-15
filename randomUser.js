const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then ( res => res.json())
    .then (data => displayUsers(data.results))
}
const displayUsers = users => {
    const mainContainer = document.querySelector('.main-container');
   for (const user of users) {
    console.log(user)
    const div = document.createElement('div');
    div.classList.add('bg')
    div.innerHTML = `
    <h1>Name: ${user.name.first} ${user.name.last}</h1>
    <h1>Email: ${user.email}</h1>
    <h3>City: ${user.location.city}</h3>
    <p>Cell: ${user.cell}</p>
    `
    mainContainer.appendChild(div)
   }
}
loadUsers()