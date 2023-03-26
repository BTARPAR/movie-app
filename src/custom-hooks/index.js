import {useState} from "react";

const useSelectedMovieHook = () => {
  const [ownedMovies, setOwnedMovies] = useState({});

  const updateMovieList = (id) => {
    if (Object.prototype.hasOwnProperty.call(ownedMovies, id)) {
      setOwnedMovies({...ownedMovies, [id]:false})
    } else {
      setOwnedMovies({...ownedMovies, [id]:true})
    }
  }

  return [ownedMovies, updateMovieList]
}

export default useSelectedMovieHook