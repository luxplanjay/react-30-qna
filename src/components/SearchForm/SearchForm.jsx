export const SearchForm = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.countryName.value);
  };

  return (
    <form onSubmit={handleSearch} autoComplete="off">
      <input type="text" name="countryName" />
      <button type="submit">Search</button>
    </form>
  );
};
