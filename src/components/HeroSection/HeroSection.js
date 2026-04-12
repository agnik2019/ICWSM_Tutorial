import { ReactComponent as Icon } from "../../assets/icons/Icon (1).svg";
import { ReactComponent as TopIcon } from "../../assets/icons/Abstract Line.svg";
import GsuLogo from "../../assets/img/GSU_1.svg";

import classes from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section
      className={`${classes.hero} text-center p-lg-5 p-2 d-flex flex-column justify-content-center align-items-center`}
    >
      <div className="position-relative mb-2">
        <div className="d-flex justify-content-center align-items-center bg-white px-2 rounded-3 m-sm-2">
          <span className="badge">
            <Icon />
          </span>
          <p className={`${classes.hero_title} my-2 p-2`}>
            <span>Bangladesh</span> Graduate Student Association of <span>GSU</span>
          </p>
        </div>
        <TopIcon
          width={35}
          height={38}
          className="position-absolute top-0 start-0 translate-middle"
        />
      </div>

      <img
        src={GsuLogo}
        alt="Georgia State University logo"
        className={classes.gsuLogo}
      />
    </section>
  );
};

export default HeroSection;