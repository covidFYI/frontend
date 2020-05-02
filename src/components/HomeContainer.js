import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import Categories from './Categories'
import InformationComponent from "./InformationComponent";
import getDataFor from '../utils/getDataFor';

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
        // const res = await fetch(`https://api.covidfyi.in/v1/state/${this.state.stateSelected}`)
        // const stateData = await res.json()
        const stateData = await getDataFor({ state: this.state.stateSelected })
        const infotypes = [... new Set(stateData.results.map(data => data.category))]
        this.setState({ availableInfoTypes: infotypes, showInfoTypes: true })
    }

    focusHandler = (value) => {
        this.setState({ inputFocus: value });
        console.log(value);
    };

    componentDidMount() {
        let input = document.querySelector('.search-input')
        let infograph = document.querySelector('.infograph')
        let searchPanel = document.querySelector('.search')
        let footer = document.querySelector('.footer')
        input.addEventListener('focus', () => {
            searchPanel.classList.add('expand');
            infograph.style.visibility = "hidden";
            footer.style.position = 'fixed';
        })

        let homeTab = document.querySelector('.home-tab');
        homeTab.addEventListener('click', () => {
            searchPanel.classList.remove('expand');
            infograph.style.visibility = "visible";
            footer.style.position = 'absolute';
        })
    }

    render() {
        return (
            <div className="home-container">
                <div className={`hide-on-focus-${this.state.inputFocus} banner`}>
                    <div className="banner-image">
                        <img src="/assets/illustration.png" width="" />
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
                    <img src="/assets/wordCloud(1).svg" />
                </div>
                <div className="">
                    <InformationComponent />
                </div>
            </div>
        );
    }
}
