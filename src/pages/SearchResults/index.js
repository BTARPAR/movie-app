import './index.css';
import useSWR from 'swr';
import {useEffect, useState} from 'react';
import fetcher from '../../api';
import Loading from '../../components/Loading';
import MovieCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';
import MessagePlaceholder from '../../components/MessagePlaceholder';
import useSelectedMovieHook from '../../custom-hooks';

const SearchResult = () => {
  // const movieList = movieContext();
  const [query, setQuery] = useState('');
  const [ownedMovies, setOwnedMovies] = useSelectedMovieHook();

  const { data, error, isLoading } = useSWR(
    `/search/movie?query=${query}&page=1`,
    fetcher
  );

  useEffect(() => {
    /*
    * This will reset the state since
    * */
    setOwnedMovies('reset')
  }, [data])

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
            isSelected = {ownedMovies[item.id] || false}
            clickHandler={() => setOwnedMovies(item.id)}
          />
        ))}
      </div>
    ) : (
      query && <MessagePlaceholder type="no-data" />
    );

  return (
      <div className="search-result">
        <div className="search-bar">
          <div className="search-bar-wrapper">
            <SearchBar input={query} initiateFetch={setQuery} />
          </div>
        </div>

        {error ? <MessagePlaceholder type="error" /> : loadComponent}

        {!!data.total_results && <div>PAGINATION</div>}
      </div>
  );
};

export default SearchResult;
