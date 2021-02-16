const InitialState = {
  cartItems: [],
};

const addItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const deleteItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);
  if (existingItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case "deleteItem":
      return {
        ...state,
        cartItems: deleteItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
