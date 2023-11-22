import "./SubsectionText.css";

const SubsectionText = ({ title }) => {
  return (
    <div>
      <p className="sub-section-text">{title}</p>
      <div className="line"></div>
    </div>
  );
};

export default SubsectionText;
