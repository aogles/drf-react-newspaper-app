import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ArticleList from "../Article/ArticlesList";
import ArticleForm from "../Article/ArticleForm";

function App() {
  const [isAuth, setAuth] = useState(!!Cookies.get("Authorization"));
  const navigate = useNavigate();

  const handleError = (err) => {
    console.warn(err);
  };

  const handleLogout = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    };
    const response = await fetch("/dj-rest-auth/logout/", options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    Cookies.remove("Authorization", `Token ${data.key}`);

    setAuth(false);
    navigate("/");
  };

  return (
    <>
      <Header isAuth={isAuth} handleLogout={handleLogout} />
      <Outlet context={[setAuth]} />
      <ArticleList />
    </>
  );
}

export default App;
