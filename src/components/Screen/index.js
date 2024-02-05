import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

const Screen = (props) => {
  const [position, setPosition] = useState({ top: 608, left: 250 });

  // Function to change the position of the button randomly
  const changePosition = () => {
    const newPos = {
      top: Math.random() * 350, // change 500 to the max height you prefer
      left: Math.random() * 350, // change 500 to the max width you prefer
    };
    setPosition(newPos);
  };
  return (
    <div
      id={Number(props.sequency)}
      className="screen-full"
      style={{ background: props.bgColor, color: props.textColor }}
    >
      <div className="container">
        <header>
          <img src={props.imageUrl} alt="simple gif" />
        </header>
        <div>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
        <footer>
          <Link
            activeClass="active"
            to={Number(props.sequency) + 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
          >
            {props.btnText}
          </Link>
          {/* <Link
            activeClass="active"
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              cursor: "pointer",
            }}
            onMouseOver={changePosition} // Change position on hover
            onClick={changePosition} // Change position on click
            to={Number(props.sequency) + 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
          >
            No
          </Link> */}
        </footer>
      </div>
    </div>
  );
};

export default Screen;
