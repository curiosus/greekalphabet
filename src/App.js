import React, {useState} from 'react';
import DisplayLetter from './DisplayLetter';
import AnswerChoices from './AnswerChoices';
import {upperCaseLetters} from './Letters';
import Score from './Score';
import classes from './App.module.css';


const App = () => {



    const generateLetter = (prev=upperCaseLetters()[0]) => {
        let letters = upperCaseLetters().filter(lett => lett.code != prev.code );
        return letters[Math.floor(Math.random() * letters.length)];
    };

    const [letter, setLetter] = useState(generateLetter());
    const [score, setScore] = useState(0);


    const handleAnswer = (answer) => {
        let tmpScore = score;
        if (answer === letter.code) {
           setScore(tmpScore+1)
        } else {
            setScore(tmpScore-1);
        }

        setLetter(generateLetter(letter));
    };

    return (
        <div className={classes.style}>
            <h1>Greek Alphabet</h1>
            <Score score={score}/>
            <DisplayLetter letter={letter}/>
            <AnswerChoices onCheckAnswer={handleAnswer}/>
        </div>
    );
};

export default App;
