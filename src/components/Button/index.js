import './index.css';

const Button = ({ type, disabled, displayText, classes, clickHandler }) => {
  const className = classes ? `button ${classes}` : 'button';
  const props = type !== 'submit' ? { onClick:clickHandler} : {}
  return (
    <input
      type={type}
      className={className}
      value={displayText}
      disabled={disabled}
      {...props}
    />
  );
};

export default Button;
