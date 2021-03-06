import React, {useState} from 'react';
import DisplayLetter from './DisplayLetter';
import AnswerChoices from './AnswerChoices';
import {Letters} from './Letters';
import Score from './Score';
import classes from './App.module.css';


const App = () => {


    const [letterCase, setLetterCase] = useState("lower");

    const generateLetter = (prev=Letters()[0]) => {
        console.log(letterCase);
        let letters = Letters().filter(lett => (lett.code != prev.code && lett.case === letterCase));
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
