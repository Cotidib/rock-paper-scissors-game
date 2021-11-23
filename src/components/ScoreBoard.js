import React from 'react';
import Logo from '../images/logo.svg';
import { useGlobalContext } from '../context.js';

function ScoreBoard() {
    const {score} = useGlobalContext();

    return (
        <div className='game-header'>
            <img className='logo' src={Logo} alt='logo'/>
            <div className='score-container'>
                <p className='score-title'>score</p>
                <p className='points'>{score}</p>
            </div>
        </div>
    )
}

export default ScoreBoard
