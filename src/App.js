import React, {Component} from 'react';

import WeatherWidget from './components/weather-widget/index'

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<WeatherWidget />
			</div>
		);
	}
}
