import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../login/auth.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AsyncLocalStorage from "@createnextapp/async-local-storage";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  /*
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncLocalStorage.getItem("token");

      if (token) {
        router.push("/homepage");
      }
    };

    checkToken();
  }, [router]);
  */

  const handleRegister = async (e) => {
    e.preventDefault();

    const inputedData = {
      userName: userName,
      email: email,
      password: password,
    };

    console.log(inputedData);

    try {
      const response = await axios.post(`${API_URL}/api/user/register`, {
        email: inputedData.email,
        password: inputedData.password,
        userName: inputedData.userName,
      });
      if (response.status === 201) {
        const loginResponse = await axios.post(`${API_URL}/api/user/login`, {
          email: inputedData.email,
          password: inputedData.password,
        });
        if (loginResponse.data) {
          await AsyncLocalStorage.setItem("token", loginResponse.data.token);
          router.push("/homepage");
        }
      }
    } catch (err) {
      if (err.response) {
        console.error("Server responded with an err:", err.response.data);
        alert(err.response.data.message);
      } else if (err.request) {
        console.error("No response received:", err.request);
      } else {
        console.error("Error during request setup:", err.message);
      }
    }
  };

  return (
    <>
      <section className={`${styles.auth} signUp`}>
        <div className={`${styles.auth__bg} signUp__bg`}></div>
        <section className={`${styles.auth__mainWrapper}`}>
          <div className={`${styles.auth__main} signUp__main`}>
            <h2 className={`${styles.auth__heading} signUp__heading`}>
              Create Account
            </h2>
            <section
              className={`${styles.auth__alternatives} signUp__alternatives`}
            >
              <div className={`${styles.authAlternative__items}`}>
                <button className={`${styles.authAlternative__item}`}>
                  <img
                    className={`${styles.authAlternative__icon}`}
                    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                    alt="Google"
                  />
                  <p className={`${styles.authAlternative__name}`}>
                    Continue with Google
                  </p>
                </button>
                <button className={`${styles.authAlternative__item}`}>
                  <img
                    className={`${styles.authAlternative__icon}`}
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
                    alt="Facebook"
                  />
                  <p className={`${styles.authAlternative__name}`}>
                    Continue with Facebook
                  </p>
                </button>
              </div>
            </section>
            <p className={`${styles.authAlternative__text}`}> - OR - </p>
            <form
              className={`${styles.auth__form} signUp__form`}
              onSubmit={handleRegister}
            >
              <div className={`${styles.form__entry}`}>
                <input
                  name="userName"
                  placeholder="Username"
                  className={`${styles.form__input}`}
                  type="text"
                  autoComplete="off"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className={`${styles.form__entry}`}>
                <input
                  name="email"
                  placeholder="Email Address"
                  className={`${styles.form__input}`}
                  type="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={`${styles.form__entry}`}>
                <input
                  name="password"
                  placeholder="Password"
                  className={`${styles.form__input}`}
                  type="password"
                  minLength="8"
                  maxLength="20"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Create Account</button>
            </form>
            <div className={`${styles.auth__footer}`}>
              <p className={`${styles.authFooter__text}`}>
                Already have an account? <Link href="/login"> Login </Link>
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default RegisterPage;
