const inputFood = document.querySelector("#input-value");
const saveBtn = document.querySelector("#btn");

let foodContainer = document.getElementById("food-container")

saveBtn.addEventListener('click', ()=>{
    foodContainer.innerHTML += `<li class="food-item">${inputFood.value}</li>`;
});

const foodItems = foodContainer.getElementsByClassName("food-item");

/*
get list of value using getElementByClassName

let allFoods =  [].map.call(foodItems, (food) => food.textContent);
*/
