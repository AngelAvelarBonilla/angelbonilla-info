import "./navMenu.scss";

const NavMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navMenu " + (menuOpen && "active")}>
      <ul onClick={() => setMenuOpen(!menuOpen)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
