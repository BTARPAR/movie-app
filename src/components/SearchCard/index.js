import './index.css';
import MONTHS from '../../utils';
import Button from '../Button';
import { movieContext } from '../../data-access';

const MovieCard = ({
  id,
  imgUrl,
  name,
  releaseDate,
  overview,
  clickHandler,
}) => {
  const movieList = movieContext();
  const date = releaseDate && releaseDate.split('-');
  const dateString = date.length && `${MONTHS[date[1]]} ${date[2]}, ${date[0]}`;
  const btnText = Object.prototype.hasOwnProperty.call(movieList, id)
    ? 'Owned'
    : 'Owned?';
  const btnProps = Object.prototype.hasOwnProperty.call(movieList, id)
    ? { classes: 'primary' }
    : {};

  return (
    <div className="card-wrapper">
      <div className="image">
        <img
          loading="lazy"
          src={
            imgUrl
              ? `https://www.themoviedb.org/t/p/w188_and_h282_bestv2/${imgUrl}`
              : 'https://cdn.pixabay.com/photo/2013/07/13/01/21/popcorn-155602_1280.png'
          }
          alt={name}
        />
      </div>
      <div className="detail">
        <div className="title">
          <h4>{name}</h4>
          {!!dateString && <span className="release_date">{dateString}</span>}
        </div>
        <div className="overview">
          <p>{overview || 'No plot found'}</p>
        </div>
      </div>
      <div className="owned-button">
        <Button
          displayText={btnText}
          type="button"
          clickHandler={clickHandler}
          {...btnProps}
        />
      </div>
    </div>
  );
};

export default MovieCard;
