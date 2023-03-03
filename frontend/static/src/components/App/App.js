import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ArticleList from "../Article/ArticlesList";
import ArticleForm from "../Article/ArticleForm";
import ArticleBoard from "../Article/Article";
import Button from "react-bootstrap/Button";

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
    navigate("/login");
  };

  return (
    <div className="wrapper">
      <>
        <Header isAuth={isAuth} />
        <Button variant="secondary" type="submit" onSubmit={handleLogout}>
          logout
        </Button>
        <Outlet context={[setAuth]} />
        <ArticleBoard />
        <ArticleList />
      </>
    </div>
  );
}

export default App;
