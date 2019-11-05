import React from 'react';
import classes from './Input.module.sass';

const Input = props => {
	const inputType = props.type || 'text'
	
	return (
		<div>
			<label htmlFor=""></label>
			<input
				type={inputType}
			/>
		</div>
	)
};

export default Input;