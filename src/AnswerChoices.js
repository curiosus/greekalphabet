import React from 'react';
import {upperCaseLetters} from './Letters';
import classes from './AnswerChoices.module.css';

const AnswerChoices = (props) => {


    return (
        <div className={classes.answer}>
            {upperCaseLetters().map((letter) =>
                <div key={letter.code}>
                    <label htmlFor={letter.code}>
                        <input onChange={() => props.onCheckAnswer(letter.code)} type="radio" id={letter.code} name="choices"
                               value={letter.code}/>
                        {letter.desc}
                    </label>
                </div>
            )}
        </div>
    );


};

export default AnswerChoices;
/*

			*/
