import React, { Component } from "react";
import InformationComponent from "../components/InformationComponent";
import SearchContainer from "../components/SearchContainer";
import Categories from "../components/Categories";
import MobileContent from "./MobileContent";
import NewsContainer from "./NewsContainer";

export default class Content extends Component {
	state = {
		stateSelected: null,
		showInfoTypes: false,
		availableInfoTypes: [],
	};

	getSelectedState = (state) => {
		this.setState(
			{ stateSelected: state, showInfoTypes: false },
			this.getInfoTypes
		);
	};

	getInfoTypes = async () => {
		// NOTE: Till new backend is not deployed, we can use flask backend from organisation repo on our localhost.
		const res = await fetch(
			`https://api.covidfyi.in/v1/state/${this.state.stateSelected}`
		);
		const stateData = await res.json();
		const infotypes = [
			...new Set(stateData.results.map((data) => data.category)),
		];
		this.setState({ availableInfoTypes: infotypes, showInfoTypes: true });
		console.log(infotypes); // For Debugging
	};

	render() {
		return (
			<div className="content">
				<div className="show-991">
					<MobileContent initialProps={this.props.initialProps} />
				</div>
				<div className="hide-991">
					<SearchContainer getSelectedState={this.getSelectedState} />
					{this.state.showInfoTypes ? (
						<Categories state={this.state.stateSelected} />
					) : null}
					<div className="news-stats">
						<NewsContainer initialProps={this.props.initialProps} />
						<InformationComponent />
					</div>
				</div>
			</div>
		);
	}
}
