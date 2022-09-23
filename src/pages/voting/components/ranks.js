const css = (currentItem, rank) => {
  if (currentItem === rank) return "a py-1 px-3 p-2 d-flex cursor";
  else return "px-3 p-2 py-1 d-flex cursor ";
};
const ranks = (cs, rank, points, csrank, currentItem, setCurrentItem) => {
  return (
    <div
      onClick={() => {
        if (currentItem === cs) setCurrentItem("");
        else setCurrentItem(cs);
      }}
      className={css(currentItem, cs)}
    >
      <h5 className={`${csrank} py-1 my-1  `}>{cs}</h5>{" "}
      {rank ? (
        <h5 className="cursor text-dark mx-2 py-1 my-1">{rank}</h5>
      ) : (
        <h5 className="mx-2 py-1 my-1 grey">select item</h5>
      )}
      <h5 className={`${csrank} py-1 my-1 `}>- {points} points</h5>
    </div>
  );
};
export default ranks;
