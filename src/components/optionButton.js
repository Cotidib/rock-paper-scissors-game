import React from 'react';

function optionButton({icon, name, handlePick, color, shadow}) {

    return (
        <div className='option-btn-container' style={{backgroundColor:`${color}`, boxShadow:`inset 0 -4px 2px ${shadow}`}} onClick={() => handlePick(name)}>
           <img src={icon}></img> 
        </div>
    )
}

export default optionButton
