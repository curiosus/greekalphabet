import React from 'react';
import Letters from './Letters';

const DisplayLetter = () => {


	const letters = Letters.upperCase();
	let letter = letters[0];

	const generateLetter = () => {
		console.log('hey');	
	}



	return (
		<div>
			<span>{String.fromCodePoint(letter)}</span>
		</div>
	)
}

export default DisplayLetter;


