import Link from 'next/link';
import "./ButtonIcon.css";

const ButtonIcon = ({ iconTag, fontSize, color, targetPage }) => {
  return (
    <div className="buttonIcon">
      <Link href={targetPage} legacyBehavior>
        <a style={{ color, fontSize: fontSize}}>
          {iconTag}
        </a>
      </Link>
    </div>
  );
};

export default ButtonIcon;

