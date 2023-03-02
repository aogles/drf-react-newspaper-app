import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Register</NavLink>
        <NavLink to="/ArticleForm">Create your own Article</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
      <div>Hello world!</div>
    </div>
  );
}

export default Header;
