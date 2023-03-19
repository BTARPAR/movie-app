import './index.css';
import useSWR from 'swr';
import { useState } from 'react';
import fetch from '../../api';
import Loading from '../../components/Loading';
import SearchCard from '../../components/SearchCard';
import SearchBar from '../../components/SearchBar';

const fetcher = (url) => {
  return fetch.get(url).then((res) => res.data);
};

const SearchResult = () => {
  const [query, setQuery] = useState('');

  const { data, error, isLoading } = useSWR(
    `/search/multi?query=${query}&page=1`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }
  const results = data.results.map((item) => (
    <SearchCard
      imgUrl={item.poster_path}
      name={item.name || item.title || item.original_title}
      releaseDate={item.first_air_date}
      overview={item.overview}
      key={item.id}
    />
  ));

  return (
    <div className="search-result">
      <div className="search-bar">
        <SearchBar input={query} initiateFetch={setQuery} />
      </div>
      <div className="results">{results}</div>
      {!!data.results.length && <div>PAGINATION</div>}
    </div>
  );
};

export default SearchResult;
