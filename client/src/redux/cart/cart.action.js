export const addItem = (item) => ({
  type: "addItem",
  payload: item,
});

export const deleteItem = (item) => ({
  type: "deleteItem",
  payload: item,
});
