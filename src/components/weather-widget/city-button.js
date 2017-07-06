import React, { Component } from "react";

export default class CityButton extends Component {

	constructor(props){
		super(props);

		this.state = {
			isActive : props.isActive
		};

		this.changeCityForecast = this.changeCityForecast.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if (this.props.isActive !== nextProps.isActive) {
			this.setState({
				isActive: nextProps.isActive
			});
		}
	}

	changeCityForecast() {
		this.props.changeCityForecast(this.props.index);
	}

	render() {

		const {isActive} = this.state;

		return(
			<a
				className={`weather-widget__button${isActive}`}
				onClick={this.changeCityForecast}
			>
				{this.props.data.name}
			</a>
		);
	}
}