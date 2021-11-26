import React from 'react';
import { motion } from "framer-motion";
import { useGlobalContext } from '../../context.js';
import {options} from '../../context.js';


function Compare() {
    const {playerPick, housePick, result, restartGame} = useGlobalContext();

    const containerAnims = {
        enter: {
            scale: [0,1.1,1],
        },
        init : {
            scale: 0,
        }
      }

      const resultAnims = {
          enter: {
            scale: [0,1.1,1],
          },
          init: {
            scale:0,
          }
      }

    return (
        <motion.section animate="enter" initial="init" variants={containerAnims} transition={{type:'spring', stiffness:75, delay:2}} className='compare-container'>
            
                <div id='playerPick' className='option-btn-container-placeholder'>
                    <div id={options[playerPick].id} className='option-btn-container' style={{backgroundColor:`${options[playerPick].primaryColor}`, boxShadow:`inset 0 -4px 2px ${options[playerPick].secondaryColor}`}}>
                        <img src={options[playerPick].icon} alt={options[playerPick].name}></img> 
                    </div>
                    <h3>you picked</h3>
                </div>
                <div id='housePick' className='option-btn-container-placeholder'>
                    <motion.div animate={{scale: [0,1.1,1]}} initial={{scale:0}} transition={{type:'spring', stiffness:75, delay:3.5}} id={options[housePick].id} className='option-btn-container' style={{backgroundColor:`${options[housePick].primaryColor}`, boxShadow:`inset 0 -4px 2px ${options[housePick].secondaryColor}`}}>
                        <img src={options[housePick].icon} alt={options[housePick].name}></img> 
                    </motion.div>
                    <h3>the house picked</h3>
                </div>
            <div className='result-container'>
                <motion.h2 animate="enter" initial="init" variants={resultAnims} transition={{type:'spring', stiffness:75, delay:5}} className='result'>{result}</motion.h2>
                <motion.button animate="enter" initial="init" variants={resultAnims} transition={{type:'spring', stiffness:75, delay:5}} className='play-btn' onClick={restartGame}>play again</motion.button>
            </div>
        </motion.section>
    )
}

export default Compare
