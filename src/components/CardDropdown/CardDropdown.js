import React, { useState } from "react";
import { CardDropdown } from "./styles";
import Open from "../../assets/open.png";

export default function CardDropdownComp({title, description}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <CardDropdown>
            <div onClick={() => setIsOpen(!isOpen)} className="card">
                <div className="text">
                    <h3>{title}</h3>
                    <img src={Open} alt="Abrir Card"/>
                </div>
                {isOpen && <div className="dropdown-menu">{description}</div>}
            </div>
        </CardDropdown>
    );
}