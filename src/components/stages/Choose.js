import React from 'react';
import OptionButton from '../optionButton.js';
import Paper from '../../images/icon-paper.svg';
import Rock from '../../images/icon-rock.svg';
import Scissors from '../../images/icon-scissors.svg';
import Triangle from '../../images/bg-triangle.svg';
import Logo from '../../images/logo.svg';
import { useGlobalContext } from '../../context.js';

const colors = {
    'yellow1' : 'hsl(39, 89%, 49%)',
    'yellow2' : 'hsl(40, 84%, 53%)',
    'blue1' : 'hsl(230, 89%, 62%)',
    'blue2' : 'hsl(230, 89%, 65%)',
    'red1' : 'hsl(349, 71%, 52%)',
    'red2' : 'hsl(349, 70%, 56%)',
}

function Choose() {
    const {setPlayerPick} = useGlobalContext();

    const handlePick = (pick) => {
        setPlayerPick(pick);
    }

    return (
        <section className='choose-step-container'>
            <div className='game-header'>
                <img className='logo' src={Logo} alt='logo'/>
                <div className='score-container'>
                    <p className='score-title'>score</p>
                    <p className='points'>00</p>
                </div>
            </div>
            <div className='options-container'>
                <img className='bg-connector' src={Triangle} alt='triangle'/>
                <div className='top-options'>
                    <OptionButton icon={Rock} name='rock' handlePick={handlePick} color={colors.red1} shadow={colors.red2}/>
                    <OptionButton icon={Paper} name='paper' handlePick={handlePick} color={colors.blue1} shadow={colors.blue2}/>
                </div>
                <OptionButton icon={Scissors} name='scissors' handlePick={handlePick} color={colors.yellow1} shadow={colors.yellow2}/>
            </div>
            <button className='play-btn'>rules</button>
        </section>
    )
}

export default Choose
