import { useState } from "react";

import style from "./AuthForm.module.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((prevState) => !prevState);
  }
  return (
    <>
      <section className={style.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form>
          <div className={style.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required></input>
          </div>
          <div className={style.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required></input>
          </div>
          <div className={style.actions}>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className={style.toggle}
              onClick={switchAuthHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AuthForm;
