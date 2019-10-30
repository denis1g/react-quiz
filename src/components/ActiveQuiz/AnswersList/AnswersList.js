import React from 'react';
import classes from './AnswersList.module.sass'
import AnswerItem from "./AnswerItem/AnswersItem";

const AnswersList = props => {
	return (
		<ul className={classes.AnswersList}>
			{ props.answers.map((answer, index) => {
				return(
					<AnswerItem
						answer={answer}
						key={answer.id}
						onAnswerClick={props.onAnswerClick}
						state={props.state ? props.state[answer.id] : null}
					/>
				)
			})}
		</ul>
	)
};

export default AnswersList;
