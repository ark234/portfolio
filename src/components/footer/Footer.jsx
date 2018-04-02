import React, { Component } from 'react';
import './Footer.css';
import github_logo from './Github.svg';
import linkedin_logo from './Linkedin.svg';

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				{/* <img src={github_logo} className="github-logo" alt="github-logo" /> */}
				{/* <img src={linkedin_logo} className="linkedin-logo" alt="linkedin-logo" /> */}
				<ul className="icons">
					<li>
						<a href="https://github.com/ark234">
							<img src={github_logo} className="github-logo" alt="github-logo" />
						</a>
					</li>
					<li>
						<a href="https://linkedin.com/in/ark234">
							<img src={linkedin_logo} className="linkedin-logo" alt="linkedin-logo" />
						</a>
					</li>
				</ul>
				<div className="copyright">©Arkadiy Nigay 2018</div>
			</footer>
		);
	}
}
