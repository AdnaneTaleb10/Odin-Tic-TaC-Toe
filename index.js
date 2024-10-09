//Player factory function 
const Player = (name , ticker) => {
    let score = 0;

    const getName = () => name;
    const getTicker = () => ticker;
    const getScore = () => score;
    const increaseScore = () => score++;

    return{
        getName , getTicker , getScore , increaseScore
    };
};