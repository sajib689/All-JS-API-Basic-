const loadPhone = async(search) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhone(data.data)
}
const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container')
   phoneContainer.innerText = ``
   phones = phones.slice(0, 10)
   const hidden = document.getElementById('hidden')
   if(phones.length  === 0) {
      hidden.classList.remove('d-none')
   } else{
    hidden.classList.add('d-none')
   }
    phones.forEach( phone => {
        console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.slug}</p>
        </div>
      </div>
        `
        phoneContainer.appendChild(div)
    })
}
const searchPhones = () => {
    const searchFiled = document.getElementById('search-filed')
    const result = searchFiled.value
    console.log(result)
    loadPhone(result)
}
loadPhone('')