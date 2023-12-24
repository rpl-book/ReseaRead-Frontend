import Link from "next/link";
import "./Button.css";

const Button = ({
  iconTag,
  buttonName,
  fontSize,
  color,
  targetPage,
  width,
  handleButton,
}) => {
  return (
    <div className="button">
      <Link href={targetPage} legacyBehavior>
        <a
          style={{ color, fontSize: fontSize, width: width }}
          onClick={handleButton}
        >
          {iconTag}
          {buttonName && <span>{buttonName}</span>}
        </a>
      </Link>
    </div>
  );
};

export default Button;
