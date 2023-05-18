import { NavLink } from "react-router-dom";
import "./PortfolioStyles.scss";

function Header() {
  return (
    <div className="header">
      <nav>
        <NavLink className="navLink" to="/aboutme">
          About Me
        </NavLink>
        <NavLink className="navLink" to="/contacts">
          contacts
        </NavLink>
        <NavLink className="navLink" to="/status">
          Status
        </NavLink>
      </nav>
    </div>
  );
}

export { Header };
