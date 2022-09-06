import React from "react";

const Link = ({ className, href, children }) => {
  //methods
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault(); //prevents the browser from refreshing
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate"); //is dispatched to the window every
    window.dispatchEvent(navEvent); //time the active history entry changes
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
