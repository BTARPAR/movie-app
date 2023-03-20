import './index.css';
import useSWR from 'swr';
import { useState } from 'react';
import fetcher from '../../api';
import Loading from '../../components/Loading';
import SearchCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';
import MessagePlaceholder from '../../components/MessagePlaceholder';

const SearchResult = () => {
  const [query, setQuery] = useState('');

  const { data, error, isLoading } = useSWR(
    `/search/multi?query=${query}&page=1`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

  const loadComponent =
    data?.results.length > 0 ? (
      <div className="results">
        {data?.results.map((item) => (
          <SearchCard
            imgUrl={item.poster_path}
            name={item.name || item.title || item.original_title}
            releaseDate={item.first_air_date || item.release_date}
            overview={item.overview}
            type={item.media_type}
            key={item.id}
          />
        ))}
      </div>
    ) : (
      query && <MessagePlaceholder type="no-data" />
    );

  return (
    <div className="search-result">
      <div className="search-bar">
        <SearchBar input={query} initiateFetch={setQuery} />
      </div>

      {error ? <MessagePlaceholder type="error" /> : loadComponent}

      {!!data.total_results && <div>PAGINATION</div>}
    </div>
  );
};

export default SearchResult;
