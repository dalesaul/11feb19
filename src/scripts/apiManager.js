const createDrink = drinkToAdd => {
  return fetch("http://localhost:8088/coffeeDrinks", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(drinkToAdd)
  });
};

const getAllDrinks = () => {
  return fetch("http://localhost:8088/coffeeDrinks").then(drinks =>
    drinks.json()
  );
};
