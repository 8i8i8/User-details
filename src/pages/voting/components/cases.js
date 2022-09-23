const cases = (
  a,
  setRank1,
  setRank2,
  setRank3,
  rank1,
  rank2,
  rank3,
  rank4,
  rank5,
  setCurrentItem
) => {
  setRank1(() => a.dishName);
  localStorage.setItem(rank5, JSON.stringify({ name: a.dishName, id: a.id }));

  if (a.dishName === rank1 || rank1.length === 0) {
    setRank2("");
    localStorage.setItem(rank3, "");

    setCurrentItem(rank3);
  } else if (a.dishName === rank2 || rank2.length === 0) {
    setRank3("");
    localStorage.setItem(rank4, "");

    setCurrentItem(rank4);
  } else setCurrentItem("");
};
const itemOnClick = (
  a,
  setRank1,
  setRank2,
  setRank3,
  rank1,
  rank2,
  rank3,
  setCurrentItem,
  currentItem
) => {
  {
    switch (currentItem) {
      case "rank 1":
        cases(
          a,
          setRank1,
          setRank2,
          setRank3,
          rank2,
          rank3,
          "rank 2",
          "rank 3",
          "rank 1",
          setCurrentItem
        );

        break;

      case "rank 2":
        cases(
          a,
          setRank2,
          setRank1,
          setRank3,
          rank1,
          rank3,
          "rank 1",
          "rank 3",
          "rank 2",
          setCurrentItem
        );

        break;

      case "rank 3":
        cases(
          a,
          setRank3,
          setRank1,
          setRank2,
          rank2,
          rank1,
          "rank 2",
          "rank 1",
          "rank 3",
          setCurrentItem
        );

        break;

      default:
        setCurrentItem("");
    }
  }
};
export default itemOnClick;
