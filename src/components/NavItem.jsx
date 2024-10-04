import { NavLink } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <NavLink
      to={navItem.link}
      className={({ isActive }) =>
        isActive ? "nav-item active-tab" : "nav-item"
      }
    >
      {navItem.name}
    </NavLink>
  );
};
export default NavItem;
