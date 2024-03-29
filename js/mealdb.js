document.getElementById('error-massage').style.display='none';

const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    //console.log(searchText);

    //clear data
    searchField.value='';
    document.getElementById('error-massage').style.display='none';


    if(searchText==''){
      const ErrorSms = document.getElementById('Error-sms');
     
      const div = document.createElement('div');
      div.innerHTML=`
       <p>please write something to display!!</p>
        `;
       ErrorSms.appendChild(div);
   
       
    }
  
    else{
    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`//dynamic babe boshabo
   //console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data.meals))
    .catch(error => displayError(error));
}
    }

    const displayError = error => {
      document.getElementById('error-massage').style.display='block';


    }
    
const displaySearchResult = meals =>{
    const searchResult = document.getElementById('search-result');
    //searchResult.innerHTML='';
    searchResult.textContent='';

 
  meals.forEach(meal =>{
    //console.log(meal)

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
           <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
           </div>
         </div>
    `;

    searchResult.appendChild(div)
   })
  }

//indivisual dital meal
const loadMealDetail = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetail(data.meals[0]));

}

const displayMealDetail = meal =>{
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent='';
  const div =document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
  `;
 mealDetails.appendChild(div);
}