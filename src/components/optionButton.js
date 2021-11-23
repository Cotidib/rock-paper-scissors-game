import React, {useState} from 'react';
import { motion } from "framer-motion";
import { useGlobalContext } from '../context.js';

function OptionButton({icon, id, name, handlePick, color, shadow}) {
    const [active, isActive] = useState(true);

    const {setPlayerPick} = useGlobalContext();

    const handleClick = (componentName) => {
        setPlayerPick(componentName);
        isActive(false);
    }

    return (
        <div className='option-btn-container-placeholder'>
            <motion.div animate={{rotate: active? 0 : 360, scale: active? 1 : [1,1.3,0]}} transition={{type:'spring', stiffness:75}} id={id} className='option-btn-container' style={{backgroundColor:`${color}`, boxShadow:`inset 0 -4px 2px ${shadow}`}} onClick={() => handleClick(name)}>
                <img src={icon}></img> 
            </motion.div>
        </div>
    )
}

export default OptionButton
