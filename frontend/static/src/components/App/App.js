import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <Header isAuth={isAuth} />
      <Outlet context={setAuth} />
      <div>The footer</div>
    </>
  );
}

export default App;
