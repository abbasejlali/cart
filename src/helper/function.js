const cutname = (title) => {
  const cut = title.split(" ");
  const name = `${cut[0]} ${cut[1]}`;
  return name;
};

const isincart = (state, id) => {
  const product = !!state.selecteditems.find((item) => item.id === id);
  return product;
};

export { cutname, isincart };
