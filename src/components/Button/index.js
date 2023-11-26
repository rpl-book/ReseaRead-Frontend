import Link from 'next/link';
import "./Button.css";

const Button = ({ iconTag, buttonName, fontSize, color, targetPage }) => {
  return (
    <div className="button">
      <Link href={targetPage} legacyBehavior>
        <a style={{ color, fontSize: fontSize}}>
          {iconTag}
          {buttonName && <span>{buttonName}</span>}
        </a>
      </Link>
    </div>
  );
};

export default Button;

