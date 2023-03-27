import './index.css';
import { useState } from 'react';
import Button from '../Button';
import Close from '../Close';

const SearchBar = ({ input, initiateFetch }) => {
  const [search, setSearch] = useState(input);

  return (
    <div className="search">
      <form
        action="/search"
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
          initiateFetch(search);
        }}
      >
        <label htmlFor="search" className="search-label">
          <div className="search-text">
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {!!search.length && (
            <Close
              handleClick={() => {
                setSearch('');
              }}
            />
          )}
        </label>
        <div className="submit">
          <Button
            type="submit"
            disabled={!search.length}
            displayText="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
