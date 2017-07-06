import React, {Component} from "react";
import _ from "lodash";

import CityButton from "./city-button";

export default class ChangeCityButtons extends Component {

	constructor(props){
		super(props);

		this.state = {
			index: props.index,
			data: props.data
		};

		this.changeCityForecast = this.changeCityForecast.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.props !== nextProps || this.state.index !== nextState.index;
	}

	componentWillReceiveProps(nextProps){

		if (this.props.index !== nextProps.index) {
			this.setState({
				index: nextProps.index
			});
		}
	}

	changeCityForecast(index){
		this.props.changeCity(index);
	}

	render(){

		const data = this.state.data;

		const buttons = _.map(data, (data, index) =>
			<CityButton
				key={index}
				index={index}
				data={data}
				isActive={this.state.index === index ? " weather-widget__current-city" : ""}
				changeCityForecast={this.changeCityForecast}
			/>
		);

		return (
			<div className="weather-widget__buttons-wrapper">
				{buttons}
			</div>
		);
	}
}