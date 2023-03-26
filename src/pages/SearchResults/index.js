import './index.css';
import useSWR from 'swr';
import { useState } from 'react';
import fetcher from '../../api';
import Loading from '../../components/Loading';
import MovieCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';
import MessagePlaceholder from '../../components/MessagePlaceholder';
import { MovieContext } from '../../data-access';
import useSelectedMovieHook from '../../custom-hooks';

const SearchResult = () => {
  const [query, setQuery] = useState('');
  const [ownedMovies, setOwnedMovies] = useSelectedMovieHook();

  const { data, error, isLoading } = useSWR(
    `/search/movie?query=${query}&page=1`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

  const loadComponent =
    data?.results.length > 0 ? (
      <div className="results">
        {data?.results.map((item) => (
          <MovieCard
            id={item.id}
            imgUrl={item.poster_path}
            name={item.title}
            releaseDate={item.release_date}
            overview={item.overview}
            key={item.id}
            clickHandler={() => setOwnedMovies(item.id)}
          />
        ))}
      </div>
    ) : (
      query && <MessagePlaceholder type="no-data" />
    );

  return (
    <MovieContext.Provider value={ownedMovies}>
      <div className="search-result">
        <div className="search-bar">
          <div className="search-bar-wrapper">
            <SearchBar input={query} initiateFetch={setQuery} />
          </div>
        </div>

        {error ? <MessagePlaceholder type="error" /> : loadComponent}

        {!!data.total_results && <div>PAGINATION</div>}
      </div>
    </MovieContext.Provider>
  );
};

export default SearchResult;
