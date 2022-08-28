import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

    const options = [
        {
            label: "The color Red",
            value: 'red'
        },
        {
            label:"The color Green",
            value: "green"
        },
        {
            label: "A Shade of Blue",
            value:"blue"
        }
    ]

 const App = () => {
    return (
        <div>
            <Dropdown  options ={options} />
        </div>
        )
}

export default App;
