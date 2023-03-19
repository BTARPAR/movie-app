import './index.css';
import ProgressCircle from '../Progress';

const Card = ({
  name = 'Boston Strangler',
  date = 'Mar 17, 2023',
  imgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/oZJfw78ZyPmgNJ0YJ8070nKEF4Y.jpg',
}) => {
  return (
    <div className="card">
      <div className="image">
        <img loading="lazy" src={imgUrl} alt={name} />
      </div>
      <div className="content">
        <div className="showProgress">
          <ProgressCircle />
        </div>
        <h2>{name}</h2>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
