import React, {Component} from 'react';
import classes from './Drawer.module.sass'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";


class Drawer extends Component {
	links = [
		{to: '/', label: 'Список', exact: true},
		{to: '/auth', label: 'Авторизация', exact: false},
		{to: '/quiz-creator', label: 'Создать тест', exact: false}
	];
	
	clickHandler = () => {
		this.props.onClose()
	};
	
	renderLinks() {
		return this.links.map((link, index) => {
			return (
				<li key={index}>
					<NavLink
						to={link.to}
						exact={link.exact}
						activeClassName={classes.active}
						onClick={this.clickHandler}
					>
						{link.label}
					</NavLink>
				</li>
			)
		})
	}
	
	render() {
		const cls = [classes.Drawer];
		
		if (!this.props.isOpen) {
			cls.push(classes.close)
		}
		
		return (
			<React.Fragment>
				<nav className={cls.join(' ')}>
					<ul>
						{this.renderLinks()}
					</ul>
				</nav>
				{this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
			
			</React.Fragment>
		)
	}
}

export default Drawer;