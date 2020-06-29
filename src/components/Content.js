import React, { Component } from "react";
import InformationComponent from "../components/InformationComponent";
import TelegramComponent from "../components/TelegramComponent";
import TwitterComponent from "../components/TwitterComponent";
import SearchContainer from "../components/SearchContainer";
import Categories from "../components/Categories";
import MobileContent from "./MobileContent";
import NewsContainer from "./NewsContainer";
import OverallStats from "./OverallStats";
import getDataFor from '../utils/getDataFor';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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
		const stateData = await getDataFor({ 'state': this.state.stateSelected })
		const infotypes = [
			...new Set(stateData.results.map((data) => data.category)),
		];
		this.setState({ availableInfoTypes: infotypes, showInfoTypes: true });
	};

	render() {
		return (
			<div className="content">
				<Grid container spacing={2}>
					<Grid item xs={12} >
						<div className="banner">
							<div className="banner-image">
								<img src="/assets/illustration.png" width="" />
							</div>
							<div className="banner-text">
								<span style={{color:"white"}}>Find consolidated information for help related to Covid-19.</span>
								<span className="tag">#together_we_can </span>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item sm={3}></Grid>
					<Grid item xs={11} sm={6} >
						<div>
							<SearchContainer getSelectedState={this.getSelectedState} currentState={this.state.stateSelected} />
							<Button variant="outlined" color="primary" size="large" href={`/${this.state.stateSelected}`}>
								Search
      						</Button>
						</div>
					</Grid>
					<Grid item sm={3}></Grid>
				</Grid>

				<TwitterComponent state="National" />
				<TelegramComponent state="National" />

			</div>
		);
	}
}