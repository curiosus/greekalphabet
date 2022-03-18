import React from 'react';
import classes from './DisplayLetter.module.css';

const DisplayLetter = (props) => {


	return (
		<div className={classes.answer}>
			<span>{String.fromCodePoint(props.letter.code)}</span>
		</div>
	)
};

export default DisplayLetter;


