import React, { Component } from 'react'
import News from './News'

export default class NewsContainer extends Component {
    render() {
        let loop = [1, 2, 3, 4, 5]
        return (
            <div className="news-container">
                {
                    loop.map(i => {
                        return <News key={i} />
                    })
                }
            </div>
        )
    }
}
