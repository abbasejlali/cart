const cutname = (title) => {
  const cut = title.split(" ");
  const name = `${cut[0]} ${cut[1]}`;
  return name;
};

const isincart = (state, id) => {
  const product = !!state.selectedItems.find((item) => item.id === id);
  return product;
};

const quantitycount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export { cutname, isincart, quantitycount };
