const loadPhone = async(search, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhone(data.data, dataLimit)
}
const displayPhone = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container')
   phoneContainer.innerText = ``
  //  Length of the displayPhone element
  const showAll = document.getElementById('show-all')
   if(dataLimit && phones.length > 9) {
    phones = phones.slice(0, 9)
    
    showAll.classList.remove('d-none')
   } else{
    showAll.classList.add('d-none')
   }
  
   const hidden = document.getElementById('hidden')
   if(phones.length  === 0) {
      hidden.classList.remove('d-none')
   } else{
    hidden.classList.add('d-none')
   }
   
    phones.forEach( phone => {
        // console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.slug}</p>
          <div id="btn-show-all" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showDetails('${phone.slug}')">Show Detail</div>
      
        </div>
      </div>
        `
        phoneContainer.appendChild(div)
    })
    toggleSpinner(false)
}
const processSearches = (dataLimit) =>{
  toggleSpinner(true)
  const searchFiled = document.getElementById('search-filed')
  const result = searchFiled.value
  console.log(result)
  loadPhone(result, dataLimit)
}
const searchPhones = () => {

  processSearches(9)
  // toggleSpinner(true)
  //   const searchFiled = document.getElementById('search-filed')
  //   const result = searchFiled.value
  //   console.log(result)
  //   loadPhone(result)
}
const toggleSpinner = isLoading => {
  const spinner =  document.getElementById('spinner')
   if (isLoading) {
    spinner.classList.remove('d-none')
   } else{
    spinner.classList.add('d-none')
   }
}
document.getElementById('btn-show-all').addEventListener('click', function() {
  processSearches()
})
const showDetails = id => {
  fetch(` https://openapi.programming-hero.com/api/phone/${id}`)
  .then(res => res.json())
  .then(data => displayModal(data.data))
}

const displayModal = modal => {
  console.log(modal)
      const modalTitle = document.getElementById('exampleModalLabel')
      modalTitle.innerText = `${modal.name}`
      const phoneFeatures = document.getElementById('phoneFeature')
      phoneFeatures.innerHTML = `
      <img  src="${modal.image}"/>
      <p>ChipSet: ${modal.mainFeatures.chipSet}</p>
      <p>Display Size: ${modal.mainFeatures.displaySize}</p>
      <p>Memory: ${modal.mainFeatures.memory}</p>
      
      <p>Storage: ${modal.mainFeatures.storage}</p>
      <p>Others: ${modal.others.Bluetooth}</p>
     
      
      `
      const modalDetails = document.getElementById('phone-details')
      modalDetails.innerHTML = `
      <p>Release Date: ${modal.releaseDate}</p>
      `
}
loadPhone('apple')