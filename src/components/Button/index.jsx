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
    <>
      <Link href={targetPage} legacyBehavior className="Link">
        <a
          className="button"
          style={{ color, fontSize: fontSize, width: width }}
          onClick={handleButton}
        >
          {iconTag}
          {buttonName && <span>{buttonName}</span>}
        </a>
      </Link>
    </>
  );
};

export default Button;
