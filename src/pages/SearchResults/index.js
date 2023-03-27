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
import { isFloat } from '../../utils';

const DEFAULT_LOWER_LIMIT = 10;
const DEFAULT_HIGHER_LIMIT = 20;

const SearchResult = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState({
    no: 1,
    renderLimit: DEFAULT_LOWER_LIMIT,
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
    const calculatePageInfo = 0.5 * value;

    if (isFloat(calculatePageInfo)) {
      return setPage({
        ...page,
        renderLimit: DEFAULT_LOWER_LIMIT,
        iterator: value,
        no: Math.ceil(calculatePageInfo),
      });
    }
    return setPage({
      ...page,
      renderLimit: DEFAULT_HIGHER_LIMIT,
      iterator: value,
      no: calculatePageInfo,
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
        <div className="pagination-wrapper">
          <div>Total movies found: <b>{data.total_results}</b></div>
        <Pagination
          count={data.total_pages * 2}
          page={page.iterator}
          onChange={(e, value) => pageHandler(value)}
          size="large"
          showFirstButton
          showLastButton
        />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
