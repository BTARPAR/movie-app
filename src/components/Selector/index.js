import './index.css';
import { useState } from 'react';

const theme = {
  light: {
    '--dark-color': '30,213,169, 1',
    '--selected-tag': 'rgba(3, 37, 65, 1)',
    '--default-anchor-color': '255,255,255,1',
    '--selected-background': 'none',
  },
};

const Selector = ({
  options = ['Today', 'This Week'],
  // onSelection,
  defaultIndex = 0,
  view = 'dark',
}) => {
  const [select, setSelect] = useState(defaultIndex);

  const clickHandler = (e, index) => {
    e.preventDefault();
    setSelect(index);
    // onSelection(index.js.js)
  };
  return (
    <div className="selectors" style={{ ...theme[view] }}>
      {options.map((option, index) => {
        return (
          <div className={`anchor ${select === index ? 'selected' : ''}`}>
            <a
              href="/#"
              className="light"
              onClick={(e) => clickHandler(e, index)}
            >
              {option}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Selector;
