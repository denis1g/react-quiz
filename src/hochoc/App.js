import React, {Component} from 'react';
import Hof from "./hof";



const App = ({list}) => (
		<ul>
			{list.map((char, index) => {
				return (
					<li key={char.name + index}>
						<strong>{char.name}</strong> --&nbsp;
						{char.side}
					</li>
				)
			})}
		</ul>
	);

const withFilteredProps = Component => ({list, side}) => {
	const filteredList = list.filter(char => char.side === side);
	return <Component list={filteredList} />
};

const FiltredList = withFilteredProps(App)


export default FiltredList;