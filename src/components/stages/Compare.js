import React from 'react';
import { motion } from "framer-motion";
import { useGlobalContext } from '../../context.js';
import {options} from '../../context.js';


function Compare() {
    const {playerPick, housePick, result} = useGlobalContext();

    const containerAnims = {
        enter: {
            scale: [0,1.1,1],
        },
        init : {
            scale: 0,
        }
      }

    return (
        <motion.section animate="enter" initial="init" variants={containerAnims} transition={{type:'spring', stiffness:75, delay:2}} className='compare-container'>
            
                <div id='playerPick' className='option-btn-container-placeholder'>
                    <div id={options[playerPick].id} className='option-btn-container' style={{backgroundColor:`${options[playerPick].primaryColor}`, boxShadow:`inset 0 -4px 2px ${options[playerPick].secondaryColor}`}}>
                        <img src={options[playerPick].icon}></img> 
                    </div>
                </div>
                <div id='housePick' className='option-btn-container-placeholder'>
                    <motion.div animate={{scale: [0,1.1,1]}} initial={{scale:0}} transition={{type:'spring', stiffness:75, delay:3.5}} id={options[housePick].id} className='option-btn-container' style={{backgroundColor:`${options[housePick].primaryColor}`, boxShadow:`inset 0 -4px 2px ${options[housePick].secondaryColor}`}}>
                        <img src={options[housePick].icon}></img> 
                    </motion.div>
                </div>
          
            <motion.h2 animate={{scale: [0,1.1,1]}} initial={{scale:0}} transition={{type:'spring', stiffness:75, delay:5}} className='result'>{result}</motion.h2>
        </motion.section>
    )
}

export default Compare
