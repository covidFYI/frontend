import React from 'react'

const News = (props) => {
	return (
		<a href={props.data.link} target="_blank" className="news-link">
			<div className="news">
				<div className="image-wrapper">
					<img src={props.data.img} />
				</div>
				<div className="news-info">
					<h6>{props.data.title}</h6>
				</div>
			</div>
		</a>
	);
};

export default News;
