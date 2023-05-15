function loadPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost (post) {
    const postContainer = document.querySelector('.user-data')
    for ( const user of post){
        console.log(user)
        const postDiv = document.createElement('div')
        postDiv.innerHTML = `
        <h1>${user.id}</h1>
        <h3>${user.title}</h3>
        <p>${user.body}</p>
        `
        postContainer.appendChild(postDiv)
        
    }
}

loadPosts()