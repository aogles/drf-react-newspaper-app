import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Register</NavLink>
        <NavLink to="/ArticleForm">Create your own Article</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
      <h1 id="page-title">Click@Night</h1>
    </div>
  );
}

export default Header;
