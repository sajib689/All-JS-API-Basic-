const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (d) => {
    const sectionContainer = document.querySelector('.container');
    console.log(d);
    const div = document.createElement('div');
    div.innerHTML = `<h1>${d.quote}</h1>`
    sectionContainer.appendChild(div);
}
