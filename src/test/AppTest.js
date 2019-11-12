import React, {Component} from 'react';
import Character from './Character';

const AppTest = ({side}) => {
	if(!side) {
		side = 'light'
	}
	
	const character = [
		{name: 'Люк Скайвокер', side: 'light'},
		{name: 'Йода', side: 'light'},
		{name: 'Обован Кеноби', side: 'light'},
		{name: 'Палпатин', side: 'dark'},
		{name: 'Дарт Вэйдер', side: 'dark'}
	];
	
	const filteredChars = character.filter(char => char.side === side);
	
	return (
		<ul>
			{filteredChars.map((char, index) => (
				<Character key={char.name + index} name={char.name} side={char.side} />
			))}
		</ul>
	)
};

export default AppTest;



