import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framework",
  },
  {
    title: "Why use React?",
    content: "Reac is a good Js Library among Engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
  {
    label: "The color orange",
    value: "orange",
  },
];

const showAccordion = () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/accordion"
  ) {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown options={options} />;
  }
};

const ShowTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};
const App = () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {ShowTranslate()}
    </div>
  );
};

export default App;
