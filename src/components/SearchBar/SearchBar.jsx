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

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-6 items-center justify-between">
      <input
        type="text"
        placeholder="Search..."
        className={`${fieldBase} placeholder:text-text-muted`}
      />
      <div className="flex gap-3">
        <select className={`${fieldBase} appearance-none pr-8 cursor-pointer`}>
          <option value="all">All</option>
        </select>
        <select
          className={`${fieldBase} appearance-none pr-8 cursor-pointer`}
          name="filter"
          id="filter">
          <option value="high">High to low</option>
          <option value="low">Low. to high</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
