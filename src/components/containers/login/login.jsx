import React, {useState, useEffect} from "react";
import axiosClient from "../../../api/axios-client";
import "./login.scss";

const CORRECT_USER = {
    username: "Mona_Kassulke14",
    password: "EECsjlVnWIXfeuA",
};

export const LoginPage = () => {
    const [user, setUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("user"));
        } catch (err) {
            console.error(err);
            return null;
        }
    });

    useEffect(() => {
        document.body.classList.add("login");
    }, [])

    const [loginInformation, setLoginInformation] = useState({
        username: "",
        password: "",
    });

    const [errMessage, setErrMessage] = useState("");

    const validateUser = () => {
        if (!loginInformation) return false;
    if (!loginInformation.username) {
      setErrMessage("Please enter the username");
      return false;
    }
    if (!loginInformation.password) {
      setErrMessage("Please enter the password");
      return false;
    }
    if (
      loginInformation.username === CORRECT_USER.username &&
      loginInformation.password === CORRECT_USER.password
    ) {
      return true;
    }
    setErrMessage("Your username or password is incorrect");
    return false;
  };

  const handleClickLogout = (e) => {
    if(e) e.preventDefault();
    if (user) {
      localStorage.setItem("user", null);
      setUser(null);
    }
  };

  const handleClickLogin = async (e) => {
    if(e) e.preventDefault();
    if (!validateUser()) {
      return;
    }
    const loginUser = await axiosClient.get("/auth/1");
    try {
      localStorage.setItem("user", JSON.stringify(loginUser));
      setUser(loginUser);
      setErrMessage("");
    } catch (err) {
      console.error(err);
      setErrMessage("Something were wrong!");
    }
  };

  const handleChangeUserName = (e) => {
    setLoginInformation((prev) => {
      return { ...prev, username: e.target.value };
    });
  };

  const handleChangePassword = (e) => {
    setLoginInformation((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  return (
    <form>
      <h2>{user ? `Hello ${user.name}` : "Login to Kairos"}</h2>
      {user ? (
        <>
          <p>You are logged in</p>
        </>
      ) : (
        <>
          <p className="error-message">{errMessage}</p>
          <fieldset>
            <ul>
              <li>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginInformation.username}
                  onChange={handleChangeUserName}
                />
              </li>
              <li>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginInformation.password}
                  onChange={handleChangePassword}
                />
              </li>
            </ul>
          </fieldset>
        </>
      )}
      <button onClick={user ? handleClickLogout : handleClickLogin}>
        {user ? "Logout" : "Login"}
      </button>
    </form>
  );
};
