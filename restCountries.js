const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then( res => res.json())
    .then ( data => displayCountry(data) )
}
const displayCountry = country => {
    
    const container = document.getElementById('container')
    
    country.forEach ( countries => {
        // console.log(countries)
        const div  = document.createElement('div')
        div.innerHTML = `
        <h1>Name: ${countries.name.common}</h1>
        <h1>Capital: ${countries.capital}</h1>
        
        <button onclick="loadDetails('${countries.cca2}')">Details</button>
        `
        container.appendChild(div)
    })
}
const loadDetails = (code) => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then (res => res.json())
        .then ( data => loadSingleCountry(data[0]) )
}
const loadSingleCountry = c => {
    console.log(c)
    const modal = document.getElementById('modal')
    const div = document.createElement('div')
    div.innerHTML = `
    <img src='${c.flags.png}'/>
    <h1>Name: ${c.name.common}</h1>
    `
    modal.appendChild(div)
}
loadCountry()