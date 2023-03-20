import './index.css';
import MONTHS from '../../utils';

const SearchCard = ({ imgUrl, name, releaseDate, overview, type }) => {
  const typeString = type.charAt(0).toUpperCase() + type.slice(1);
  const date = releaseDate && releaseDate.split('-');
  const dateString = date.length && `${MONTHS[date[1]]} ${date[2]}, ${date[0]}`;

  return (
    <div className="wrapper">
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
        <div className="type">
          {type && <span className="release_date">{typeString}</span>}
        </div>
        <div className="overview">
          <p>{overview || 'No plot found'}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
