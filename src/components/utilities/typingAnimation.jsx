import Typed from "typed.js";
import React from "react";
const TypeAnimate = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Hi!  welcome to my website^5000"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="type-wrap">
      <span className="text-[25px] max-md:text-[20px] text-center font-semibold font-['Poppins']  text-white" style={{ whiteSpace: "pre" }} ref={el} />
    </div>
  );
};

export default TypeAnimate;
