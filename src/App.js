import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Banner />
				<Body />
				<Footer />
			</div>
		);
	}
}

export default App;
