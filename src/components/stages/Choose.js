import React from 'react';
import { motion  } from "framer-motion";
import OptionButton from '../OptionButton.js';
import Triangle from '../../images/bg-triangle.svg';
import {options} from '../../context.js';
import { useGlobalContext } from '../../context.js';

function Choose() {
    const {playerPick} = useGlobalContext();


    const anims = {
        exit: {
            scale: playerPick? [1,1.1,0] : 1,
            transitionEnd: playerPick? {display: "none"} : {display: "flex"},
        },
    }

    return (
        <motion.section animate="exit" variants={anims} transition={{type:'spring', stiffness:75, delay:1}} className='options-container'>
                <motion.img animate={{opacity: playerPick? 0 : 1}} className='bg-connector' src={Triangle} alt='triangle'/>
                <div className='top-options'>
                    <OptionButton icon={options.paper.icon} id={options.paper.id} name={options.paper.name} color={options.paper.primaryColor} shadow={options.paper.secondaryColor}/>
                    <OptionButton icon={options.scissors.icon} id={options.scissors.id} name={options.scissors.name} color={options.scissors.primaryColor} shadow={options.scissors.secondaryColor}/>
                </div>
                <OptionButton icon={options.rock.icon} id={options.rock.id} name={options.rock.name} color={options.rock.primaryColor} shadow={options.rock.secondaryColor}/>    
        </motion.section>
    )
}

export default Choose
