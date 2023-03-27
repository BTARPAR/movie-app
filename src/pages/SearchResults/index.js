import './index.css';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import fetcher from '../../api';
import Loading from '../../components/Loading';
import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import MessagePlaceholder from '../../components/MessagePlaceholder';
import useSelectedMovieHook from '../../custom-hooks';

const DEFAULT_LIMIT = 10;

const SearchResult = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState({
    no: 1,
    renderLimit: DEFAULT_LIMIT,
    iterator: 1,
  });
  const [ownedMovies, setOwnedMovies] = useSelectedMovieHook();

  const { data, error, isLoading } = useSWR(
    `/search/movie?query=${query}&page=${page.no}`,
    fetcher
  );

  useEffect(() => {
    /*
     * This will reset the state since
     * */
    setOwnedMovies('reset');
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  const loadComponent = (limit) =>
    data?.results.length > 0 ? (
      <div className="results">
        {data?.results.map((item, index) => {
          if (index > limit) return null;
          return (
            <MovieCard
              id={item.id}
              imgUrl={item.poster_path}
              name={item.title}
              releaseDate={item.release_date}
              overview={item.overview}
              key={item.id}
              isSelected={ownedMovies[item.id] || false}
              clickHandler={() => setOwnedMovies(item.id)}
            />
          );
        })}
      </div>
    ) : (
      query && <MessagePlaceholder type="no-data" />
    );

  const pageHandler = (value) => {
    return value % 2 === 0
      ? setPage({ ...page, renderLimit: 20, iterator: page.iterator + 1 })
      : setPage({
          ...page,
          no: page.no + 1,
          renderLimit: DEFAULT_LIMIT,
          iterator: page.iterator + 1,
        });
  };

  return (
    <div className="search-result">
      <div className="search-bar">
        <div className="search-bar-wrapper">
          <SearchBar input={query} initiateFetch={setQuery} />
        </div>
      </div>

      {error ? (
        <MessagePlaceholder type="error" />
      ) : (
        loadComponent(page.renderLimit)
      )}

      {!!data.total_results && (
        <Pagination
          count={data.total_pages * 2}
          page={page.iterator}
          onChange={(e, value) => pageHandler(value)}
          size="large"
          showFirstButton
          showLastButton
        />
      )}
    </div>
  );
};

export default SearchResult;
