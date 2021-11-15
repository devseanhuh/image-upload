import "./ProgressBar.scss";

const ProgressBar = ({ percent }) => {
  return (
    <div className="progress-bar-boundary">
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
