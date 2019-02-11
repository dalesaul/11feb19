const buildSingleDrink = (singleDrinkObject) => {
  return `<div id="drinkContainer">
    <lable>
    <p>${singleDrinkObject.drink}</p>
    <p>${singleDrinkObject.barrista}</p>
    <p>${singleDrinkObject.location}</p>
    </lable>
    </div>`;
};
