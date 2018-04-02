import React, { Component } from 'react';
import './Body.css';
import email_img from './images/email.png';
import phone_img from './images/phone.png';
import mvp_img from './images/mvp-screenshot.png';
import imi_img from './images/imi-screenshot.png';
import colory_img from './images/colory-screenshot.png';
import g2ga_img from './images/g2ga-screenshot.png';

export default class Body extends Component {
	render() {
		return (
			<main id="body">
				<section id="projects" className="style1">
					<h2>PROJECTS</h2>
					<div className="project-outer">
						<div className="project-inner">
							<h3>My Virtual Pillbox</h3>
							<img src={mvp_img} alt="mvp" height="320px" width="640px" />
							<p>
								MVP takes guesswork out of managing multiple prescriptions by telling the user what medications they
								need to take and when.
							</p>
							<i>Ruby on Rails, React.js, PostgreSQL, HTML5, CSS3</i>
							<p>
								<a href="https://my-virtual-pillbox.surge.sh/">
									<button className="launch-btn">Launch</button>
								</a>
							</p>
						</div>

						<hr />

						<div className="project-inner">
							<h3>It's Magic In</h3>
							<img src={imi_img} alt="imi" height="320px" width="640px" />
							<p>
								IMI helps photographers master the magic hour (ideal sunlight temperature) by using geolocation and
								sunrise/sunset API to display the magic hour each day, at any location.
							</p>
							<i>Ruby on Rails, React.js, PostgreSQL, HTML5, CSS3</i>
							<p>
								<a href="https://its-magic-in.herokuapp.com/">
									<button className="launch-btn">Launch</button>
								</a>
							</p>
						</div>

						<hr />

						<div className="project-inner">
							<h3>Colory</h3>
							<img src={colory_img} alt="colory" height="320px" width="640px" />
							<p>My spin on the classic memory game.</p>
							<i>JavaScript, HTML5, CSS3</i>
							<p>
								<a href="https://git.generalassemb.ly/pages/ark234/project-1-memory-game/">
									<button className="launch-btn">Launch</button>
								</a>
							</p>
						</div>

						<hr />

						<div className="project-inner">
							<h3>Get to GA</h3>
							<img src={g2ga_img} alt="g2ga" height="320px" width="640px" />
							<p>Short game about my transition from Per Scholas to General Assembly.</p>
							<i>JavaScript, jQuery, HTML5, CSS3</i>
							<p>
								<a href="https://ark234.github.io/">
									<button className="launch-btn">Launch</button>
								</a>
							</p>
						</div>
					</div>
				</section>
				<section id="about-me" className="style2">
					<h2>ABOUT ME</h2>
					<p>
						Hello, I'm Ark. I'm a software engineer with a background in IT support. I am also a licensed SCUBA and
						first aid instructor. Whether I'm in the ocean or a system, my goal is to leave the place in better
						condition than I found it in.
					</p>
				</section>
				<section id="contact" className="style1">
					<h2>CONTACT</h2>
					<div className="outer">
						<div className="inner">
							<img src={email_img} alt="email" height="32px" width="32px" />
							<span>arkadiy@nigay.xyz</span>
						</div>

						<div className="inner">
							<img src={phone_img} alt="phone" height="32px" width="32px" />
							<span>828-585-4319</span>
						</div>
					</div>
				</section>
			</main>
		);
	}
}
