import "./intro.scss";
import { ArrowDropDown } from "@mui/icons-material";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="heroText">
        <h1>Hello there.</h1>
        <h2>
          I'm Angel! I am currently a Software Engineer at Lockheed Martin.
        </h2>
        <div className="contacts">
          <div className="itemContainer">
            <span>angelavelarbonilla@gmail.com</span>
          </div>
          <div className="itemContainer">
            <span>+1 609-605-1920</span>
          </div>
        </div>
      </div>
      <a href="#projects" alt="Down Arrow">
        <ArrowDropDown className="downArrow" />
      </a>
    </div>
  );
};

export default Intro;
