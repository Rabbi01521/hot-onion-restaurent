// use local storage as your db for now
const addToDb = (id) => {
  const exists = getDb();
  let food_cart = {};
  if (!exists) {
    food_cart[id] = 1;
  } else {
    food_cart = JSON.parse(exists);
    if (food_cart[id]) {
      const newCount = food_cart[id] + 1;
      food_cart[id] = newCount;
    } else {
      food_cart[id] = 1;
    }
  }
  updateDb(food_cart);
};
const SubsToDb = (id) => {
  const exists = getDb();
  let food_cart = {};
  if (!exists) {
  } else {
    food_cart = JSON.parse(exists);
    if (food_cart[id]) {
      const newCount = food_cart[id] - 1;
      if (newCount < 1) {
        removeFromDb(id);
      }
      food_cart[id] = newCount;
    }
  }
  updateDb(food_cart);
};

const getDb = () => localStorage.getItem("food_cart");

const updateDb = (cart) => {
  localStorage.setItem("food_cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const exists = getDb();
  if (!exists) {
    // Eat puffed rice
  } else {
    const food_cart = JSON.parse(exists);
    delete food_cart[id];
    updateDb(food_cart);
  }
};

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

const clearTHeCart = () => {
  localStorage.removeItem("food_cart");
};

export { addToDb, removeFromDb, clearTHeCart, getStoredCart, SubsToDb };
