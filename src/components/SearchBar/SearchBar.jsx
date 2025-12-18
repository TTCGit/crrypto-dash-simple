import { useCoins } from "../../context/AppContext";

const SearchBar = () => {
  const fieldBase = `
    w-full
    px-3 py-2
    rounded-md
    bg-input
    text-text-primary
    border border-border
    shadow-sm
    transition-colors
    hover:border-border-light
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-border-focus
    focus-visible:border-border-focus
  `;

  const { searchTerm, setSearchTerm, sortBy, setSortBy, limit, setLimit } =
    useCoins();

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-6 items-center justify-between">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className={`${fieldBase} placeholder:text-text-muted`}
      />
      <div className="flex gap-3 items-center">
        <label
          htmlFor="see"
          className="text-text-primary">
          See:
        </label>
        <select
          className={`${fieldBase} appearance-none pr-8 cursor-pointer`}
          value={limit}
          onChange={(e) => setLimit(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label
          htmlFor="sort"
          className="text-text-primary">
          Sort:
        </label>
        <select
          className={`${fieldBase} appearance-none pr-8 cursor-pointer`}
          name="filter"
          id="filter"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="market_cap_desc">Market Cap (High to low)</option>
          <option value="market_cap_asc">Market Cap (Low to high)</option>
          <option value="price_desc">Price (High to low)</option>
          <option value="price_asc">Price (Low to high)</option>
          <option value="change_desc">24h Change (High to low)</option>
          <option value="change_asc">24h Change (Low to high)</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
