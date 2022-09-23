const btn = (data, setData, rank1, rank2, rank3) => {
  let data1 = [...data];
  const sort = (rank) => {
    data1 = [
      ...data1.filter((a) => a.dishName === rank.name && a.id === rank.id),
      ...data1.filter((a) => a.dishName !== rank.name && a.id !== rank.id),
    ];
  };

  sort(rank3);
  sort(rank2);
  sort(rank1);

  return setData(data1);
};
export default btn;
