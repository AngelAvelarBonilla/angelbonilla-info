import "./intro.scss";
import { ArrowDropDown } from "@material-ui/icons";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="heroText">
        <h1>Hello there.</h1>
        <h2>
          I'm Angel! I am currently a Software Engineer at Lockheed Martin.
        </h2>
      </div>
      <a href="#projects" alt="Down Arrow">
        <ArrowDropDown className="downArrow" />
      </a>
    </div>
  );
};

export default Intro;
