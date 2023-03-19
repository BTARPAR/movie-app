import './index.css';
import { useState } from 'react';

const SearchBar = ({ input, initiateFetch }) => {
  const [search, setSearch] = useState(input);

  return (
    <div className="search">
      <form
        action="/search"
        method="get"
        onSubmit={() => initiateFetch(search)}
      >
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
