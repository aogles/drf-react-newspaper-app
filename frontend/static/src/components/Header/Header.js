import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Register</NavLink>
      </nav>
      <div>Hello world!</div>
    </div>
  );
}

export default Header;
