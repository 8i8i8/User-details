const css = (a, rank1, rank2, rank3) => {
  if (
    (a.dishName === rank1.name && a.id === rank1.id) ||
    (a.dishName === rank2.name && a.id === rank2.id) ||
    (a.dishName === rank3.name && a.id === rank3.id)
  ) {
    return "card mx-auto bg";
  } else return "card mx-auto";
};
export default css;
