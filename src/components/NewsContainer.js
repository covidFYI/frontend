import React, { Component } from "react";
import News from "./News";

export default class NewsContainer extends Component {
    
    // shuffle = (array) => {
    //     return array.sort(() => Math.random() - 0.5)
    // }

	render() {
        // this.news = (this.props.initialProps.results)
		return (
			<div className="news-container">
				{this.props.initialProps.map((data, i) => {
					return <News data={data} key={i} />;
				})}
			</div>
		);
	}
}
