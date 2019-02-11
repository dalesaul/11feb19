const printAllDrinks = () => {
  document.querySelector("#drinkContainer").innerHTML = "";
  getAllDrinks()
  .then(allDrinks => {
      allDrinks.forEach(singleDrink => {
          document.querySelector("#drinkContainer").innerHTML += buildSingleDrink(singleDrink)
      });
  })
};

