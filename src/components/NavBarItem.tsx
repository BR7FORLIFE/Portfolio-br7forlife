import type { Dispatch, SetStateAction } from "react";

interface NavBarItemsProps{
    id: string // <-- id para referenciar cada section
    label: string
    animationClass: string
    selected: string | null
    setSelected: Dispatch<SetStateAction< string | null >>
}

function NavBarItem({ id, label, animationClass, selected, setSelected }: NavBarItemsProps){
    return (
        <>
        <li 
        className={`
            ${selected === id 
            ? `bg-white text-black ${animationClass} p-2 rounded-xl` 
            : `bg-black text-white ${animationClass} p-2 rounded-xl`}`
        } >
            <a 
            href={id}
            onClick={() => setSelected(id)}
            >{label}</a>
        </li>
        </>
    )
}

export default NavBarItem