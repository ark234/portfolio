import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<header id="header">
				<h3>
					<a href="#projects">Projects</a>
				</h3>
				<h3>
					<a href="#about-me">About Me</a>
				</h3>
				<h3>
					<a href="#contact">Contact</a>
				</h3>
			</header>
		);
	}
}
