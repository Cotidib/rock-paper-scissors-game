import React from 'react';
import { useGlobalContext } from '../../context.js';

function Start() {
    const {startGame} = useGlobalContext();

    return (
        <div>
            <button className='play-btn' onClick={startGame}>play</button>
        </div>
    )
}

export default Start
