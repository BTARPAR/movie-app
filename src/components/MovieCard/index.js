import './index.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MONTHS } from '../../utils';
import Button from '../Button';
import Check from '../Button/Check';
import Close from '../Button/Close';

const MovieCard = ({
  imgUrl,
  name,
  releaseDate,
  overview,
  clickHandler,
  isSelected,
}) => {
  const isSmall = useMediaQuery('(max-width: 440px)');
  const date = releaseDate && releaseDate.split('-');
  const dateString = date.length && `${MONTHS[date[1]]} ${date[2]}, ${date[0]}`;
  const btnText = isSelected ? 'Owned' : 'Owned?';
  const btnProps = isSelected ? { classes: 'primary' } : {};
  const LoadIcon = isSelected ? Close : Check;

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
      <div
        className="owned-button"
        style={isSmall ? { marginRight: '3%' } : {}}
      >
        <Button
          displayText={btnText}
          type="button"
          clickHandler={clickHandler}
          {...btnProps}
        >
          {isSmall && <LoadIcon handleClick={clickHandler} />}
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
