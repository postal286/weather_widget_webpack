import React, {Component} from "react";

export default class WeatherInformation extends Component {

	constructor(props) {
		super(props);

		this.state = {
			index: props.index,
			data: props.data
		};
	}

	componentWillReceiveProps(nextProps){
		if (JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data) || this.props.index !== nextProps.index) {
			this.setState({
				data: nextProps.data
			});
		}
	}

	render() {
		let {data} = this.state,
				name = data.name,
				icon = data.weather[0].icon,
				temp = Math.round(data.main.temp),
				weather = data.weather[0].main,
				wind = Math.round(data.wind.speed),
				clouds = data.clouds.all;

		return (
			<div className="weather-widget__content">

				<div className="weather-widget__content_city-wrapper">
					<h2 className="weather-widget__content_city">
						{name}
					</h2>
				</div>

				<div className="weather-widget__content_icon">
					<img
						src={require(`./img/icons/${icon}.png`)}
						alt="Weather-Icon"
					/>
				</div>

				<div className="weather-widget__content_info-wrapper">

					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Weather
						</h3>
						<div className="weather-widget__content_info">
							{weather}
						</div>
					</div>
					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Temperature
						</h3>
						<div className="weather-widget__content_info">
							{`${temp}°C`}
						</div>
					</div>
					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Wind Speed
						</h3>
						<div className="weather-widget__content_info">
							{wind} m/s
						</div>
					</div>
					<div className="weather-widget__content_info-item-wrapper">
						<h3 className="weather-widget__content_second-title">
							Clouds
						</h3>
						<div className="weather-widget__content_info">
							{clouds} %
						</div>
					</div>
				</div>

			</div>
		);
	}
}