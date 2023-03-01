import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, useOutletContext } from "react-router-dom";

function LoginForm(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const [setAuth] = useOutletContext();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleError = (err) => {
    console.warn(err);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(user),
    };
    const response = await fetch("/dj-rest-auth/login/", options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await response.json();
    Cookies.set("Authorization", `Token ${data.key}`);
    setAuth(true);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label htmlfor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={user.username}
          onChange={handleInput}
        />
      </div>
      <div class="mb-3">
        <label htmlfor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={user.password}
          onChange={handleInput}
        />
      </div>
      <button onClick="submit" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
