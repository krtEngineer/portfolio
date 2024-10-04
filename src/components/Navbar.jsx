import Name from "./Name";
import NavItems from "./NavItems";

const Navbar = ({ name, navItems }) => {
  return (
    <section className="navbar">
      <Name name={name}></Name>
      <NavItems navItems={navItems}></NavItems>
    </section>
  );
};
export default Navbar;
