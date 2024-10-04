import NavItem from "./NavItem";

const NavItems = ({ navItems }) => {
  return (
    <section className="nav-items">
      {navItems.map((navItem) => {
        return <NavItem key={navItem.id} navItem={navItem} />;
      })}
    </section>
  );
};
export default NavItems;
