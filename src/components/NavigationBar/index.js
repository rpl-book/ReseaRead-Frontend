import Link from "next/link";
import Image from "next/image";
import "./navbar.css";

const NavigationBar = () => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <nav>
        <div>
          <Link href="/homepage">
            <Image src="/logo.png" alt="logo" width={175} height={44.064} />
          </Link>
        </div>

        <ul>
          <li className="">
            <Link href="#">Catalog</Link>
          </li>

          <li>
            <Link href="/library">My Library</Link>
          </li>

          <li>
            <a href="#">Timeline</a>
          </li>

          <li>
            <a href="#">Profile</a>
          </li>

          <li>
            <div>
              <form className="search-bar">
                <input type="text" placeholder="Search for.." />
                <button type="submit">
                  <Image
                    src="/icon-search.png"
                    alt="icon-search"
                    width={20}
                    height={20}
                  />
                </button>
              </form>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
