
import { NavLink } from "react-router-dom";



function Header(){
    return (
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
    )
}

export {Header}