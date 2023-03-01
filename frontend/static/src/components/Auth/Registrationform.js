import { useState } from "react";
import Cookies from "js-cookie";

function RegistrationForm(props) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: "",
    email: "",
  });

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

    if (user.password1 !== user.password2) {
      setError("passwords do not match!");
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(user),
    };
    const response = await fetch("/dj-rest-auth/registration/", options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await response.json();
    Cookies.set("Authorization", `Token ${data.key}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label htmlfor="email" className="form-label">
          Enter email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={user.email}
          onChange={handleInput}
          required
        />
      </div>
      <div class="mb-3">
        <label htmlfor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={user.username}
          onChange={handleInput}
          required
        />
      </div>
      <div class="mb-3">
        <label htmlfor="password1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password1"
          name="password1"
          value={user.password1}
          onChange={handleInput}
          required
        />
      </div>
      <div class="mb-3">
        <label htmlfor="password2" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password2"
          name="password2"
          value={user.password2}
          onChange={handleInput}
          required
        />
      </div>
      <div>{error}</div>
      <button onClick="submit" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;
