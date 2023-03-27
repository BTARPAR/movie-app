import './index.css';

const Check = ({ handleClick }) => {
  return (
    <div className="check-wrapper">
      <div className="check" onClick={handleClick} role="presentation" />
    </div>
  );
};

export default Check;
