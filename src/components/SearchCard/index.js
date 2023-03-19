import './index.css';

const SearchCard = ({ imgUrl, name, releaseDate, overview }) => {
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
          {releaseDate && <span className="release_date">{releaseDate}</span>}
        </div>
        <div className="overview">
          <p>{overview || 'No plot found'}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
