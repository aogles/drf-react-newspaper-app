import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Register</NavLink>
    </nav>
  );
}

export default Header;
