export const SearchBox = ({ onSearch }) => {
  return (
    <form
      autoComplete="off"
      onSubmit={e => onSearch(e.currentTarget.elements.searchTerm)}
    >
      <input name="searchTerm" />
      <button type="submit">Search</button>
    </form>
  );
};
