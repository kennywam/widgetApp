import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
        }, 
        {
            label: "The color orange",
            value: 'orange'
        }
    ]

 const App = () => {
    //states
    //const [selected, setSelected] = React.useState(options[0])
    // const [showDropdown, setShowDropdown] = React.useState(true);

    // //methods
    // const handleDropdown = () => {
    //     setShowDropdown(!showDropdown)
    // }

    return (//temporarily rendering Dropdown component alone
    <div>
            {/* <button onClick={handleDropdown}>Toggle Dropdown</button>
        {
            showDropdown ?
                <Dropdown 
                    selected={selected} 
                    onSelectedChange ={setSelected}
                    options ={options} 
                /> : null
                } */}
                <Translate />
        </div>
        )
}

export default App;
