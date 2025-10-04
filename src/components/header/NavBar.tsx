import { useState } from "react";
import NavBarItem from '@Components/header/NavBarItem'
import { navBar } from '@Utils/constants/contants'

function Navbar(){
    const [select, setSelect] = useState< string | null >(null)

    return (
        <>
        <ul className="flex flex-row gap-6">
            {navBar.map(({id, label}, index) => (
                <NavBarItem 
                    key={index} 
                    id={id} 
                    label={label} 
                    animationClass="animation" 
                    selected={select} 
                    setSelected={setSelect} 
                />
            ))}
        </ul>
        </>
    )
}

export default Navbar