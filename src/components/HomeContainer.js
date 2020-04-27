import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import Categories from './Categories'

export default class HomeContainer extends Component {

    state = {
        stateSelected: null,
        showInfoTypes: false,
        availableInfoTypes: [],
        inputFocus: false,
    }

    getSelectedState = (state) => {
        this.setState({ stateSelected: state, showInfoTypes: false }, this.getInfoTypes)
    }

    getInfoTypes = async () => {
        // NOTE: Till new backend is not deployed, we can use flask backend from organisation repo on our localhost.
        const res = await fetch(`https://api.covidfyi.in/v1/state/${this.state.stateSelected}`)
        const stateData = await res.json()
        const infotypes = [... new Set(stateData.results.map(data => data.category))]
        this.setState({ availableInfoTypes: infotypes, showInfoTypes: true })
        console.log(infotypes) // For Debugging
    }

	focusHandler = (value) => {
		this.setState({ inputFocus: value });
		console.log(value);
    };
    
    componentDidMount() {
        let input = document.querySelector('.search-input')
        let infograph = document.querySelector('.infograph')
        let searchPanel = document.querySelector('.search')
        input.addEventListener('focus', () => {
            searchPanel.classList.add('expand');
            infograph.style.visibility= "hidden";
        })

        let homeTab = document.querySelector('.home-tab');
        homeTab.addEventListener('click', () => {
            searchPanel.classList.remove('expand');
            infograph.style.visibility = "visible";

        })
    }

	render() {
		return (
			<div className="home-container">
				<div className={`hide-on-focus-${this.state.inputFocus} banner`}>
					<div className="banner-image">
                        <img src="/assets/peoplecovid1.svg" width=""/>
                    </div>
                    <div className="banner-text">
                        <span>Find consolidated information for help related to Covid-19.</span>
                        <span className="tag">#together_we_can </span>
                    </div>
				</div>
				<div className="search">
					<SearchContainer focusHandler={this.focusHandler} getSelectedState={this.getSelectedState} currentState={this.state.stateSelected} />
                    {this.state.showInfoTypes ? <Categories state={this.state.stateSelected} /> : null}
				</div>
                <div className="infograph">
                    <img src="/assets/b.svg" />
                </div>
			</div>
		);
	}
}
