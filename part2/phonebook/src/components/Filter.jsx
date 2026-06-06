const Filter = ({ search, setSearch }) => {
  const handleSetSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <p>
      filter shown with
      <input value={search} onChange={handleSetSearch} />
    </p>
  );
};

export default Filter;
