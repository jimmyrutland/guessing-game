
// File is only concerned with buisiness logic
export const getGuessInformation = (userGuess, randomNumber) => {
    const guessInt = parseInt(userGuess);
    if (isNaN(guessInt)) {
        return '';
    } else if (guessInt === randomNumber) {
        return 'Correct!';
    } else if (guessInt > randomNumber) {
        return 'Too high!';
    } else {
        return 'Too low!';
    }
};

export const getRandomNumber = () => parseInt(Math.random() * 10);