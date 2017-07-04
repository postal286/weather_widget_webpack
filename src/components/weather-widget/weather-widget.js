import React, {Component} from 'react';
import axios from 'axios';


import WeatherInformation from './weather-information';
import ChangeCityButtons from './change-city-buttons';
import './weather-widget.pcss'

const cities = {
	omsk: 1496153,
	moscow: 5202009,
	newYork: 5128638
};

const API_KEY = '553baeedbafd8c0df291c4dad4e03fc1';
const query = `http://api.openweathermap.org/data/2.5/group?id=${cities.omsk},${cities.moscow},${cities.newYork}&units=metric`;

export class WeatherWidget extends Component {

	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			data: null
		};

		this.changeCity = this.changeCity.bind(this);
	}

	componentDidMount() {
		this.getData(query);
		this.timer = setInterval( () => this.getData(query), 600000);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props !== nextProps || JSON.stringify(this.state.data) !== JSON.stringify(nextState.data) || this.state.index !== nextState.index;
	}

    componentWillUnmount() {
		clearInterval(this.timer);
	}

	getData(CityQuery) {

		axios.get(CityQuery,
			{
				params: {
					appid: API_KEY,
					lang: 'ru',
					units: 'metric'
				}
			})
			.then(({ data })=> {
			this.setState({
					data: data.list
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	changeCity(index) {
		this.setState({
			index: index
		})
	}

	render() {

		let {data} = this.state,
			component,
			errorTitleStyle = {textAlign: 'center'};

		if (data === null) {
			component = <h1 style={errorTitleStyle}>Something goes wrong</h1>
		} else {

			component =

				<div className="weather-widget__wrapper_inner">
					<ChangeCityButtons
						index={this.state.index}
						changeCity={this.changeCity}
						data={this.state.data}
					/>

					<WeatherInformation
						index={this.state.index}
						data={this.state.data[this.state.index]}
					/>
				</div>
		}

		return (
			<div className="weather-widget__wrapper">
				{component}
			</div>
		);
	}
}