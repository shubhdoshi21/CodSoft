import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollSet({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location);
  }, [location]);
  return <>{children}</>;
}
export default ScrollSet;
