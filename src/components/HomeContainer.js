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

	render() {
		return (
			<div className="home-container">
				<div className={`hide-on-focus-${this.state.inputFocus}`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nisi
					scelerisque eu ultrices vitae auctor eu augue ut. Cursus vitae congue
					mauris rhoncus aenean. Facilisis sed odio morbi quis commodo. Accumsan
					sit amet nulla facilisi morbi tempus iaculis urna id. Molestie ac
					feugiat sed lectus. Condimentum vitae sapien pellentesque habitant
					morbi tristique senectus et netus. Facilisi etiam dignissim diam quis
					enim lobortis scelerisque fermentum dui. Urna porttitor rhoncus dolor
					purus non enim praesent elementum. Est ullamcorper eget nulla facilisi
					etiam dignissim. Parturient montes nascetur ridiculus mus mauris vitae
					ultricies. Nisi scelerisque eu ultrices vitae. Quam id leo in vitae
					turpis massa sed elementum tempus. Sed ullamcorper morbi tincidunt
					ornare. Sapien pellentesque habitant morbi tristique senectus.
					Ultrices neque ornare aenean euismod elementum nisi quis eleifend
					quam.
				</div>
				<div className="search">
					<SearchContainer focusHandler={this.focusHandler} getSelectedState={this.getSelectedState} />
				</div>
                {this.state.showInfoTypes ? <Categories state={this.state.stateSelected} /> : null}
			</div>
		);
	}
}
