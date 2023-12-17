"use client";
import { useState } from "react";
import styles from "./auth.module.css";
import axios from "axios";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const login = () => {
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const inputedData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${API_URL}/api/user/login`, {
        email: inputedData.email,
        password: inputedData.password,
      });
      if (response.data) {
        await AsyncLocalStorage.setItem("token", response.data.token);
        router.push("/homepage");
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
      <section className={`${styles.auth} login`}>
        <div className={`${styles.auth__bg} login__bg`}></div>
        <section className={`${styles.auth__mainWrapper}`}>
          <div className={`${styles.auth__main} login__main`}>
            <h2 className={`${styles.auth__heading} login__heading`}>Login</h2>
            <form
              className={`${styles.auth__form} login__form`}
              onSubmit={handleLogin}
            >
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
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit"> Login </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default login;
