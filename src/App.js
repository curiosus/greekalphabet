import React, {useState} from 'react';
import DisplayLetter from './DisplayLetter';
import AnswerChoices from './AnswerChoices';

const App = () => {

    const letters = [0x0391, 0x0392, 0x0393, 0x0394, 0x0395];


    const generateLetter = () => {
        return letters[Math.floor(Math.random() * 5)]
    };

    const [letter, setLetter] = useState(generateLetter())


    const handleAnswer = (answer) => {
        console.log(answer, letter);
        console.log((answer === letter ? "WIN!" : "LOSE"))
        setLetter(generateLetter());
    };

    return (
        <div>
            <h1>Greek Alphabet</h1>
            <DisplayLetter letter={letter}/>
            <AnswerChoices onCheckAnswer={handleAnswer}/>
        </div>
    );
};

export default App;
