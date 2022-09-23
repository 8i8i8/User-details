const search = (a, setSearchInput, setSearchResult, data) => {
  setSearchInput(a.target.value);
  const searchResult = data.filter((b) => {
    if (
      b.dishName.toLowerCase().includes(a.target.value.toLowerCase()) ||
      b.description.toLowerCase().includes(a.target.value.toLowerCase())
    ) {
      return b;
    }
  });
  setSearchResult(searchResult);
};

export default search;
