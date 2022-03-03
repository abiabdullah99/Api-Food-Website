const allMeals = () => {
  const searchText = document.getElementById("search-box").value;
  searchText.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals));
};

const displaySearchResult = (meals) => {
  for (const meal of meals) {
    const searchResult = document.getElementById("search-result");

    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strCategory}</p>
    </div>
  </div>`;
  searchResult.appendChild(div);
  console.log(meal)
  }
};
