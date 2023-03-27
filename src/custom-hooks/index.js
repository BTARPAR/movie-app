import { useState } from 'react';

const useSelectedMovieHook = () => {
  const [ownedMovies, setOwnedMovies] = useState({});

  const updateMovieList = (id) => {
    if (id === 'reset') {
      setOwnedMovies({});
    } else {
      setOwnedMovies({ ...ownedMovies, [id]: !ownedMovies[id] });
    }
  };

  return [ownedMovies, updateMovieList];
};

export default useSelectedMovieHook;
