printAllDrinks();

document.querySelector("#submit-btn").addEventListener("click", () => {
  const drinkValue = document.querySelector("#drinkInput").value;
  const barristaValue = document.querySelector("#barristaInput").value;
  const locationValue = document.querySelector("#locationInput").value;
  // console.log(drinkToAdd);

  const drinkToAdd = {
    drink: drinkValue,
    barrista: barristaValue,
    location: locationValue
  };

  createDrink(drinkToAdd).then(() => {
    printAllDrinks();
  });
});
