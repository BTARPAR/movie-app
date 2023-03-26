import './index.css';

const Close = ({ handleClick }) => {
  return (
    <div className="close-wrapper" onClick={handleClick} role="presentation">
      <div className="arrow">
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};

export default Close;
