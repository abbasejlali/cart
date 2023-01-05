const cutname = (title) => {
  const cut = title.split(" ");
  const name = `${cut[0]} ${cut[1]}`;
  return name;
};

export { cutname };
