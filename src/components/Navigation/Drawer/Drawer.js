import React, {Component} from 'react';
import classes from './Drawer.module.sass'
import Backdrop from "../../UI/Backdrop/Backdrop";

class Drawer extends Component {
	
	links = [1, 2, 3];
	
	renderLinks() {
		return this.links.map((link, index) => {
			return (
				<li key={index}>
					<a>Link {link}</a>
				</li>
			)
		})
	}
	
	render() {
		const cls = [classes.Drawer]
		
		if(!this.props.isOpen){
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