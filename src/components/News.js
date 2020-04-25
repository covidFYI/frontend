import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div className="news">
                <div className="image-wrapper">
                    <img src="https://www.jagranimages.com/images/newimg/25042020/25_04_2020-corona111_20220455.jpg"/>
                </div>
                <div className="news-info">
                    <h5>News headline goes here</h5>
                    <p>Source: NDTV</p>
                </div>
            </div>
        )
    }
}
