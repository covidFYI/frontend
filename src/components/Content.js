import React, { Component } from "react";
import InformationComponent from "../components/InformationComponent";
import SearchContainer from "../components/SearchContainer";
import Categories from "../components/Categories";
import MobileContent from "./MobileContent";
import NewsContainer from "./NewsContainer";
import OverallStats from "./OverallStats";
import HospitalsStats from "./HospitalsStats";
import LaboratoryStats from "./LaboratoryStats";

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
					<div className="desktop-content">
						<div className="banner">
							<div className="banner-image">
								<img src="/assets/illustration.png" width="" />
							</div>
							<div className="banner-text">
								<span>Find consolidated information for help related to Covid-19.</span>
								<span className="tag">#together_we_can </span>
							</div>
						</div>
						<div className="card">
							<OverallStats height={200} enableLink={true}/>
						</div>
						<div className="feature-wrapper">
							<div className="feature-content">
								<div className="infograph">
									<img src="/assets/wordCloud(1).svg" />
								</div>
								<div className="search-feature">
									<SearchContainer getSelectedState={this.getSelectedState} />
									{this.state.showInfoTypes ? (
										<Categories state={this.state.stateSelected} />
									) : null}
								</div>
							</div>
						</div>
						<div className="news-stats card">
							<h5>Latest news</h5>
							<NewsContainer initialProps={this.props.initialProps} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
