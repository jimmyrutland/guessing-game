import { useEffect, useState } from "react";
import { getRandomNumber, getGuessInformation } from "./guessInformationUtils";

// Custom Hook
// only concerned with framework/state logic
const useGuessNumberScreenSelector = () => {
    const [randomNumber, setRandomNumber] = useState(getRandomNumber());
    const [userGuess, setUserGuess] = useState('');
    const [guessInformation, setGuessInformation] = useState('');

    const resetGame = () => {
        setUserGuess('');
        setRandomNumber(getRandomNumber());
    };

    useEffect(() => {
        setGuessInformation(getGuessInformation(userGuess, randomNumber));
    } , [userGuess, randomNumber])

    return {
        userGuess,
        guessInformation,
        setUserGuess,
        resetGame, 
    };
}
export default useGuessNumberScreenSelector;