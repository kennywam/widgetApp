import React from "react";

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    // state
    const [open, setOpen] = React.useState(false)
    //ref
    const ref = React.useRef()

    // methods
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null//this prevents the slected color from appearing on 
                        //the list
        }
        return(
            <div 
                onClick = {() => onSelectedChange(option)}//
                key={option.value} 
                className="item"
            >
                {option.label}
            </div>
        )
    })


    const handleClick = (event) => {//Handles dropdown when whit space is clicked 

        if (ref.current.contains(event.target)){
            return
        }
            setOpen(false) 
    }

    React.useEffect(() => {
        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)//clean up  fuction
        }
    }, [])

    const onHandleClick = (event) =>{
        event.stopPropagation()
        setOpen(!open)
    }
        
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div   
                    onClick={onHandleClick}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                   
                    
                >
                    <i className="dropdown icon"></i>
                    <div className="text" style={{color:selected.value}}>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown