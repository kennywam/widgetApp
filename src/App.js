import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React?',
        content: "React is a front end Javascript framework"
    },
    {
        title: "Why use React?",
        content: "Reac is a good Js Library among Engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
]

 const App = () => {
    return (
        //<Accordion items={items} />
        <Search />
        )
}

export default App;
