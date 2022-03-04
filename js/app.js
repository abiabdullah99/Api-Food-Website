// Search Meals Items 
const allMeals = () => {
  const searchText = document.getElementById("search-box");
  const searchValue = searchText.value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

  // Error Handle 
  if (searchValue == "") {
    document.getElementById("error").innerText =
      "❌ No Result Found Please Try Again";
  } else {
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data.meals))
      .catch((error) => displayError(error));

      // Clear Display Search Items 
    document.getElementById("search-box").value = "";
    document.getElementById("search-result").innerHTML = "";
  }
};
// Error Handle 
const displayError = (error) => {
  document.getElementById("error").innerText = "❌ No Result Found Please Try Again";
};

// Dispaly Prorperty Set 
const displaySearchResult = (data) => {
  document.getElementById("error").innerText = ''
  // first 20 Data show Display 
  const first20items = data.slice(0, 21);
  for (const meal of first20items) {
    const searchResult = document.getElementById("search-result");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strCategory}</p>
              <button onclick="loadMealDetail(${meal.idMeal})" class="details-btn">Details Meals</button>
            </div>
          </div>`;
    searchResult.appendChild(div);
  }
};

// Meals Details Itmes set 
const loadMealDetail = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDisplayDetails(data.meals[0]));
};

// Show Details Items 
const showDisplayDetails = (meal) => {
  const displayInput = document.getElementById("meal-details");
  displayInput.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<img src="${meal.strMealThumb}" class="card-img" alt="...">
    <div class="card-body">
        <h5 class="card-title">Meal: ${meal.strMeal}</h5>
        <h5 class="card-title">Ingredient: ${meal.strIngredient1}</h5>
        <h5 class="card-title">Ingredient: ${meal.strIngredient6}</h5>
        <h5 class="card-title">Measure: ${meal.strMeasure2}</h5>
        <h5 class="card-title">Measure: ${meal.strMeasure5}</h5>
        <h5 class="card-title">Ingredient: ${meal.strIngredient2}</h5>
        <p class="card-text">Instructions: ${meal.strInstructions.slice(
          0,
          100
        )}</p>
        <a href="${meal.strYoutube}" class="details-btn">Go</a>
    </div>
    `;
  displayInput.appendChild(div);
};
