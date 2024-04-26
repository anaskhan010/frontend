import React, { useRef, useEffect, useState } from "react";

const withOverflowYScroll = (WrappedComponent) => {
  const WithOverflowYScroll = (props) => {
    const [maxHeight, setMaxHeight] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
      const calculateMaxHeight = () => {
        const { offsetTop } = ref.current;
        const windowHeight = window.innerHeight;
        const calculatedMaxHeight = windowHeight - offsetTop - 20; // Adjust as needed
        setMaxHeight(calculatedMaxHeight);
      };

      calculateMaxHeight();
      window.addEventListener("resize", calculateMaxHeight);

      return () => {
        window.removeEventListener("resize", calculateMaxHeight);
      };
    }, []);

    return (
      <div
        ref={ref}
        style={{ maxHeight: maxHeight, overflowY: "scroll" }}
        className="overflow-y-scroll"
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithOverflowYScroll;
};

export default withOverflowYScroll;
