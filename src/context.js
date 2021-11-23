import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext()

const options = {
    "rock" : 1,
    "paper" : 2,
    "scissors" : 3,
}

const max = Object.keys(options).length;

const AppProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [housePick, setHousePick] = useState("");
  const [playerPick, setPlayerPick] = useState("");

  const startGame = () => {
    setStart(true);
    setHousePick("");
    setPlayerPick("");
    let randomNum = Math.floor(Math.random() * max);
    let randomPick = Object.keys(options);
    setHousePick(randomPick[randomNum]);
    console.log("house choose " + randomPick[randomNum])
  };

 useEffect( () => {
    compare();
 },[playerPick])

  const compare = () => {
    console.log(playerPick);
    let diff = options[playerPick] - options[housePick];
    if(diff === 1 || diff === -2){
            console.log("player wins"); 
    }
    else if(diff === 2 || diff === -1){
        console.log("house wins");
    }
    else if(diff === 0){
        console.log("draw");
    } 
  }

  return <AppContext.Provider 
    value={{
        startGame,
        setPlayerPick,
      
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }