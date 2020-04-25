import React, { Component } from 'react';
import HomeContainer from './HomeContainer'
import NewsContainer from './NewsContainer'
import StatsContainer from './StatsContainer'

export default class MobileContent extends Component {
    render() {
        return (
            <div className="tabbed-navigation">
                <div className="tabs">
                    <input type="radio" name="tab-radio" id="home-tab" className="tab-radio" />
                    <label className="home-tab tab" htmlFor="home-tab">
                        <img className="tab-image" src="/assets/home.svg"/>
                        Home
                    </label>
                    <input type="radio" name="tab-radio" id="news-tab" className="tab-radio" />
                    <label className="news-tab tab" htmlFor="news-tab">
                        <img className="tab-image" src="/assets/news.svg" />
                        News
                    </label>
                    <input type="radio" name="tab-radio" id="stat-tab" className="tab-radio" />
                    <label className="stats-tab tab" htmlFor="stat-tab">
                        <img className="tab-image" src="/assets/stats.svg" />
                        Stats
                    </label>
                    <div className="selected-tab"></div>
                    <div className="tabs-content">
                        <div className="home-content">
                            <HomeContainer/>
                        </div>
                        <div className="news-content">
                            <h4>Latest news</h4>
                            <NewsContainer />
                        </div>
                        <div className="stat-content">
                            <h4>Latest stats</h4>
                            <StatsContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
