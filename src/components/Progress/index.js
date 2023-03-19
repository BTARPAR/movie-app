import './index.css';

const ProgressCircle = () => {
  return (
    <div className="progress">
      <div
        className="percent"
        style={{ '--percentColor': '#21C875', '--percentage': 18 }}
      >
        <svg>
          <circle cx="18" cy="18" r="18" />
          <circle cx="18" cy="18" r="18" />
        </svg>
        <div className="number">
          <h6>
            85<span>%</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
