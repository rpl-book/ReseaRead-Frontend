import Link from "next/link";
import "./Button2.css";

const Button2 = ({ iconTag, buttonName, fontSize, targetPage, color }) => {
  return (
    <div className="button">
      <Link href={targetPage} legacyBehavior>
        <a style={{ color: color, fontSize: fontSize }}>
          {iconTag}
          {buttonName && <span>{buttonName}</span>}
        </a>
      </Link>
    </div>
  );
};

export default Button2;
