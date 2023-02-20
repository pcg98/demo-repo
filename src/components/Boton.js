import React from "react";
import '../stylesheets/Boton.css';

function Boton({ texto, isButtonClick, managerClic }){
    return(
        <button
            className={ isButtonClick ? 'button-click' : 'button-reset'}
            onClick= {managerClic} >
            {texto}
        </button>
    )
}


export default Boton