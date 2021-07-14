import useGuessNumberScreenSelector from './useGuessNumberScreenSelector';

const GuessNumberScreen = () => {    
    // deconstruct our custom hook
    const { 
        userGuess,
        setUserGuess,
        guessInformation,
        resetGame,
    } = useGuessNumberScreenSelector();
    
    // Only pass values/functions to the view. 
    // Handle framework/business logic elsewhere.
    return (
        <>
            <h1> Guess a number 0 through 9 </h1>
            <h2>{guessInformation}</h2>
            <input 
                type="text" 
                value={userGuess}
                onInput={(e) => setUserGuess(e.target.value)}
            />
            <button onClick={resetGame} > Click to Reset Game </button>
        </>
    );
};
export default GuessNumberScreen;