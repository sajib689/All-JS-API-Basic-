const loadMeals = (search) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => loadSingleMeal(data.meals));
};
const loadSingleMeal = (meals) => {
  const container = document.getElementById("meals-container");
  container.innerHTML = ``;
  for (const meal of meals) {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card" onclick="displayDetail(${meal.idMeal})">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text"></p>
        </div>
      </div>
        `;
    container.appendChild(div);
  }
};
const searchFood = () => {
  const searchFiled = document.getElementById("search-filed");
  const result = searchFiled.value;
  // console.log(result);
  loadMeals(result);
};
const displayDetail = (idMeal) => {
  
  fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
  .then(res => res.json())
  .then( data => console.log(data) )
  .catch (error => console.log(error))
};
loadMeals('');
