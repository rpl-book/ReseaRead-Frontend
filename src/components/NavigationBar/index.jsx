"use client";
import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import { useRouter } from "next/navigation";
import AsyncLocalStorage from "@createnextapp/async-local-storage";

const NavigationBar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncLocalStorage.removeItem("token");
    alert("Successfully Logout");
    router.push("/login");
  };

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
            <Link href="/discovery">Catalog</Link>
          </li>

          <li>
            <div>
              <Link href="/library">My Library</Link>
            </div>
          </li>

          <li>
            <a href="#">Timeline</a>
          </li>

          <li>
            {/*<a href="/profile">Profile</a>*/}
            <a href="#" onClick={handleLogout}>
              My Profile
            </a>
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
