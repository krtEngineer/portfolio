import { Link } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <Link to={navItem.link} className="nav-item">
      {navItem.name}
    </Link>
  );
};
export default NavItem;
