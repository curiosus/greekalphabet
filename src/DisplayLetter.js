import React from 'react';

const DisplayLetter = (props) => {


	return (
		<div>
			<span>{String.fromCodePoint(props.letter)}</span>
		</div>
	)
};

export default DisplayLetter;


