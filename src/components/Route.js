import React from "react";

const Route = ({ path, children }) => {
  //states
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  ); //To cause Route
  React.useEffect(() => {
    //to rerender
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange); //listens to change of popstate

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
