import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState("")
  

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newArray = [...foods, newFood]
    setFoods(newArray)

  }

function handleLiClick(id) {
  const newFoodArray = foods.map((food) => {
    if (id === food.id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1
      }
       }
       else {
        return food
    }
  });
  setFoods(newFoodArray);
  // console.log(newFoodArray)
}
function handleFilter(e) {
setCuisine(e.target.value)



}
const foodsDisplayed = foods.filter((food) => {
  if(cuisine === "All") {
    return true
  } else {
    return food.cuisine === cuisine
  }
})
 

  const foodList = foodsDisplayed.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilter}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
    </div>
  );
  
}



export default SpicyFoodList;
