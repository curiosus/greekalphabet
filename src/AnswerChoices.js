import React from 'react';
import Letters from './Letters';

const AnswerChoices = (props) => {


    return (
        <div>
            {Letters().map((letter) =>
                <div key={letter.code}>
                    <label>
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
