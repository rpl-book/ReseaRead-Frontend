import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";
import ButtonIcon from "../ButtonIcon/";

const SearchBar = ({ targetPage }) => {
  return (
    <div className="">
      <form className="searchbar flex">
        <input
          type="text"
          placeholder="Search for.."
          className="search-input"
        />
        <div className="btn-search">
          <ButtonIcon
            iconTag={<CiSearch />}
            fontSize="20px"
            targetPage={targetPage}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
