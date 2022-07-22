import "./navbar.scss";
import { PhoneIphone, Mail } from "@mui/icons-material";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            //Angel
          </a>
          <div className="itemContainer">
            <PhoneIphone className="icon" />
            <span>+1 609-605-1920</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>angelavelarbonilla@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="borgir" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
