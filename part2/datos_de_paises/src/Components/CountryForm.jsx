// eslint-disable-next-line react/prop-types
export const CountryForm = ({ handleSubmit, setSearch, search }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Search
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search Country"
          />
        </div>
        <button type="submit">search</button>
      </form>
    </div>
  );
};
