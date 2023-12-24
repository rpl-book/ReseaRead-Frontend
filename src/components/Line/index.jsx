import "./Line.css";

const Line = ({ width, height, color }) => {
  return (
    <div className="line">
      <div
        style={{ width: width, height: height, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default Line;
